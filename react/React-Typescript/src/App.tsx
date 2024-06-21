import "./App.css";
import Heading from "./Components/Heading";
import FriendsList from "./Components/FriendsList";
import Status from "./Components/Status";
import Text from "./Components/Text";
import ParentText from "./Components/ParentText";
import Button from "./Components/Button";
import User from "./Components/User";
import GenericProps from "./Components/GenericProps";

function App() {
  const name = {
    firstName: "Lakshay",
    lastName: "Bhati",
  };

  const listOfFriends = [
    {
      firstName: "Vishal",
      lastName: "Soni",
    },
    {
      firstName: "Ishita",
      lastName: "Mohanty",
    },
  ];

  function clickFunction(e: React.MouseEvent) {
    console.log("button clicked");
    console.dir(e.target);
  }

  return (
    <>
      <center>
        <Heading name="Lakshay" ctc={6} nameObj={name} />
        <FriendsList list={listOfFriends} />
        <Status status="success" />{" "}
        {/* if we pass anything except loading, success, error then typescript will give us an error because we have definded that the status can contain only those values or types. */}
        <Text styles={{ backgroundColor: "blueviolet", borderRadius: "5px" }}>
          PlaceHolder Text
        </Text>
        <ParentText>
          <Text>This the parent heading's text</Text>
        </ParentText>
        {/* In the above situation we are passing component inside another component and text inside that component and that why we are giving the type of children of <ParentText/> as React.ReactNode */}
        <Button handleClick={clickFunction}>Click Me</Button>
        <User />
        <GenericProps />
      </center>
    </>
  );
}

export default App;
