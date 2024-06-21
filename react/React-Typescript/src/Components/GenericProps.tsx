import List from "./List";

function GenericProps() {
  const NumArray = [1, 2, 3, 4, 5];
  const strArray = ["a", "b", "c", "d"];
  const objArray = [
    {
      fname: "lakshay",
      lname: "bhati",
    },
    {
      fname: "Ishita",
      lname: "bhati",
    },
    {
      fname: "Vishal",
      lname: "Soni",
    },
  ];
  return (
    <>
      <h2>GenericProps</h2>
      <List
        arrayInput={strArray}
        onClick={(item: number) => console.log(item)}
      />
      <List
        arrayInput={NumArray}
        onClick={(item: number) => console.log(item)}
      />
      {/* <List
        arrayInput={objArray}
        onClick={(item: number) => console.log(item)}
      /> */}
    </>
  );
}

export default GenericProps;
