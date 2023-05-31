import { useRouter } from "next/router";
import React from "react";

const SingleCategory = () => {
  const router  = useRouter();
  const {categorySlug} = router.query
  // console.log("🚀 ~ file: [categorySlug].jsx:6 ~ SingleCategory ~ router:", {categorySlug})
  return <div>SingleCategory</div>;
};

export default SingleCategory;
