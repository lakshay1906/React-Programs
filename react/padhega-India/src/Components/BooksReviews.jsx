import React from "react";
import SingleBookReview from "./SingleBookReview";

function BooksReviews() {
  return (
    <div className="flex flex-col ml-12">
      <h1 className="border-2 border-orange-600 w-fit px-3 py-1 rounded-[2rem] text-lg mb-8">
        Book Reviews
      </h1>
      <div className="flex gap-8">
        <SingleBookReview />
        <SingleBookReview />
        <SingleBookReview />
      </div>
    </div>
  );
}

export default BooksReviews;
