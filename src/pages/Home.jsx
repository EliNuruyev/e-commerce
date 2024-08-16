import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, forPrice } from "../redux/slices/ProductsSlice";
import ReactPaginate from "react-paginate";
import { setItemOffset } from "../redux/slices/OffsetSlice";
import Card from "../widgets/Card";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const { products, categoryActive } = useSelector((state) => state.products);
  const itemOffset = useSelector((state) => state.itemOffset.itemOffset);
  const [val, setVal] = useState("asc");
  const itemsPerPage = 9;
  let nav = useNavigate();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(forPrice(val));
  }, [dispatch, val]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    dispatch(setItemOffset(newOffset));
  };

  return (
    <>
      <div>
        <div className="p-3 text-right bg-[#f3f3f3] mb-3">
          <select
            disabled={categoryActive}
            className="py-1 px-2 capitalize"
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
          >
            <option value="asc" className="capitalize">
              asc
            </option>
            <option value="desc" className="capitalize">
              desc
            </option>
          </select>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-4 content-center ">
            {currentItems.map((product, i) => (
              <Card
                key={i}
                product={product}
                onClick={() => nav(`product/${product.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
      <ReactPaginate
        className="flex justify-center items-center pagination gap-2 my-5"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        activeLinkClassName="active"
      />
    </>
  );
}
