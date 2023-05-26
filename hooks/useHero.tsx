import { useState, useEffect } from 'react';

const useHero = () => {
  const [heros, setHeros] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          process.env.NEXT_PUBLIC_AROMA_API +
            '?populate[0]=hero&populate[1]=hero.img&populate[2]=hero.content'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch hero');
        }
        const data = await response.json();
        if (data?.attributes?.hero?.length > 0) {
          setLoading(false);
          setHeros(data?.attributes.hero);
        } else {
          setLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchHero();

    return () => {
      // Cleanup logic (if needed)
    };
  }, []);

  return {
    heros,
    loading,
    isError,
  };
};

export default useHero;
