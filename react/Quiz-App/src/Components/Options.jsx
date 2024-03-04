import React from "react";

const Options = (props) => {
  return (
    <div className="text-3xl mx-20 border border-black flex justify-center items-center w-64 h-12 hover:cursor-pointer hover:scale-110 hover:rounded-xl transition-all">
      {props.text}
    </div>
  );
};

export default Options;
