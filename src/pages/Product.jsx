import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Product = () => {
  let { id } = useParams();
  let { allProducts } = useSelector((state) => state.products);
  let found = allProducts.find((item) => item.id == id);

  return (
    <div>
      <div className="w-10/12 m-auto mt-5 flex gap-5">
        <img src={found.image} className="w-[300px] h-[300px]" />

        <div className="flex-1">
          <h3 className="font-bold text-lg">{found.title}</h3>
          <p>{found.description}</p>
          <span className="flex my-5">
            <button className="border p-5">+</button>
            <p className="p-5">0</p>
            <button className="border p-5">-</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
