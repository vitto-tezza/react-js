import Cards from "../cards/Cards";
import "./ListProducts.css";

const ListProducts = () => {
  return (
    <div className="ContainerCards">
      <Cards title="remera1" size="XL" price={2500} />
      <Cards title="remera2" size="S" price={1600} />
      <Cards title="remera3" size="L" price={3000} />
      <Cards title="remera4" size="M" price={2300} />
    </div>
  );
};

export default ListProducts;
