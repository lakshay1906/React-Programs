type headingProps = {
  name: string;
  ctc: number;
  nameObj: {
    firstName: string;
    lastName?: string;
  };
};
// After declaring this type to the props I can't provide name props a number value and also I can't provide the string value to the ctc prop.
// Question mark after the prop name specifies that the props is optional.

function Heading(props: headingProps) {
  return (
    <>
      <h1>
        My{" "}
        <span>
          {props.name} {props.nameObj.lastName}
        </span>{" "}
        I'm working in a good company at <span>{props.ctc}</span> LPA CTC.{" "}
      </h1>
    </>
  );
}

export default Heading;
