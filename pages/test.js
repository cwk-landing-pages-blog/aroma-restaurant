import React from 'react';

import qs from 'qs';
import { getAllPageData } from '@/utils/api';
import axios from 'axios';

const test = ({ data }) => {
  console.log('🚀 ~ file: test.js:6 ~ test ~ data:', data);

  if (!data) return <h1 className='text-white'>error</h1>;

  return <div>test</div>;
};

export async function getStaticProps() {
  const result = await getAllPageData();

  if (result?.data !== undefined && result !== undefined) {
    return {
      props: {
        data: result.data,
      },
    };
  }

  return {
    props: {
      data: null,
    },
  };
}

export default test;
