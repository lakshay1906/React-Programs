type personProps = {
  list: {
    firstName: string;
    lastName: string;
  }[];
};

function FriendsList(props: personProps) {
  return (
    <>
      <div>
        <h2>Friend's list</h2>
        {props.list.map((obj, idx) => (
          <h2 key={idx}>
            <span>
              {obj.firstName} {obj.lastName}
            </span>
          </h2>
        ))}
      </div>
    </>
  );
}

export default FriendsList;
