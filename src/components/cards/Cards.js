import "./Cards.css";
export default function Cards(props) {
  return (
    <div className="CardItem">
      <h2>{props.title}</h2>
      <p>precio : $ {props.price}</p>
      <p>talle : {props.size}</p>
      <button>comprar</button>
    </div>
  );
}
