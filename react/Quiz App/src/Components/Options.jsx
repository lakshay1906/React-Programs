import React from "react";

const Options = (props) => {
  return (
    <>
      <option value={props.value}>{props.title}</option>
    </>
  );
};

export default Options;
