type textProps = {
  children: string;
  styles?: React.CSSProperties;
};

function Text(props: textProps) {
  return (
    <>
      <h2 style={props.styles}>{props.children}</h2>
    </>
  );
}

export default Text;
