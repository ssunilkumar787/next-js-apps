import React from "react";

const page = ({ params }: { params: { productId: string } }) => {
  return <div>product id : {params.productId}</div>;
};

export default page;
