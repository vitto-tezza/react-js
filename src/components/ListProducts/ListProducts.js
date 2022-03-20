import Cards from "../cards/Cards";
import "./ListProducts.css";

const ListProducts = () => {
  return (
    <div className="ContainerCards">
      <Cards title="remera1" size="XL" price={2500} stockMax={5} />
      <Cards title="remera2" size="S" price={1600} stockMax={8} />
      <Cards title="remera3" size="L" price={3000} stockMax={10} />
      <Cards title="remera4" size="M" price={2300} stockMax={4} />
    </div>
  );
};

export default ListProducts;
