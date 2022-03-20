import ItemCount from "../ItemCount/ItemCount";
import "./Cards.css";

export default function Cards(props) {
  return (
    <div className="CardItem">
      <h2>{props.title}</h2>
      <p>precio : $ {props.price}</p>
      <p>talle : {props.size}</p>
      <ItemCount className="Counter" stockMax={props.stockMax}></ItemCount>
      <button>comprar</button>
    </div>
  );
}
