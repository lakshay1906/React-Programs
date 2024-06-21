import React from "react";

function SingleBookReview() {
  return (
    <div className="w-96 h-60 border-2 border-orange-600 px-5 py-3 flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <h1 className="text-xl">Abc</h1>
        <span className="text-gray-500">- 08/06/2024</span>
      </div>
      <div>⭐⭐⭐⭐</div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
        obcaecati eveniet neque magni architecto labore ipsa repudiandae nulla
        aperiam vel, voluptas dolores quidem voluptates harum modi illum commodi
        vitae? Vitae?
      </div>
    </div>
  );
}

export default SingleBookReview;
