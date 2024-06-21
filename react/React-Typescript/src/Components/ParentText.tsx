type parentText = {
  children: React.ReactNode;
};

function ParentText(props: parentText) {
  return <p>{props.children}</p>;
}

export default ParentText;
