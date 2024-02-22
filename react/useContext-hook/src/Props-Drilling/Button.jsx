import React from "react";

const Button = (props) => {
  return <div>Button Hello{props.counter}</div>;
};
// This situation is called props drilling(What we have done is : we are displaying count variable which is present in app.jsx in button.jsx. To take count varibale from app.jsx we have to firstly pass the count varibale in navbar.jsx as a prop and then we have to pass that prop to Button.jsx as a prop. This situation is called props drilling and to remove this problem we have react hook with us i.e. useContext hook with the help of this hook we can directly take the component of grandparent or greatgrandparents to child components)
export default Button;
