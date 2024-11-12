import React from "react";

const page = ({
  params,
}: {
  params: { reviewId: string; productId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) {
  }
  return (
    <>
      <div>review id : {params.reviewId}</div>
      <div>Product id : {params.productId}</div>
    </>
  );
};

export default page;
