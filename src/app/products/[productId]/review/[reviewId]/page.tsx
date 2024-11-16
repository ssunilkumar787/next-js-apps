"use client";
import React from "react";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const Review = ({
  params,
}: {
  params: { reviewId: string; productId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) {
  }

  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }

  return (
    <>
      <div>review id : {params.reviewId}</div>
      <div>Product id : {params.productId}</div>
    </>
  );
};

export default Review;
