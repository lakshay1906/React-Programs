type pagesProps = {
  heading: string;
  description: string;
};

function Pages(props: pagesProps) {
  return (
    <div className="m-5 ml-9">
      <h1 className="text-4xl font-bold">{props.heading}</h1>
      <h2 className="text-xl">{props.description}</h2>
    </div>
  );
}

export default Pages;
