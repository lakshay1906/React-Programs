import React from "react";

type buttonProps = {
  children: React.ReactNode;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button(props: buttonProps) {
  return (
    <>
      <button onClick={(e) => props.handleClick(e)}>{props.children}</button>
    </>
  );
}

export default Button;
