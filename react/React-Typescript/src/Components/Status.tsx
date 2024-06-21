type statusProps = {
  status: "loading" | "success" | "error";
};

function Status(props: statusProps) {
  let message = "hey everyone";

  if (props.status == "loading") message = "Loading....";
  else if (props.status == "success") message = "data fetched successfully";
  else if (props.status == "error") message = "Error occured !!";
  return (
    <>
      <h2>{message}</h2>
    </>
  );
}

export default Status;
