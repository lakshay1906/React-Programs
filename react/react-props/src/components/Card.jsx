import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.src} />
        <h2>{props.title}</h2>
        <div className="desc">
          <h3>{props.desc}</h3>
          <h3>₹ {props.price}</h3>
        </div>
        <div className="btns">
          <button className="btn1">Buy</button>
          <button className="btn2">Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default Card;
