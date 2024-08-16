import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/slices/CategoriesSlice";
import { useEffect, useState } from "react";
import { getProducts, handleCategory } from "../redux/slices/ProductsSlice";
import { reset} from "../redux/slices/OffsetSlice";

export default function LeftBar() {
  let dispatch = useDispatch();
  let { categories } = useSelector((state) => state.categories);
  let [active,setActive ] = useState("")
  
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  
 
  return (
    <div className="flex-1 sticky top-0 h-max">
      {categories.map((categorie, i) => (
        <div key={i} className={`px-1 py-3 text-[#37003c] capitalize cursor-pointer font-semibold transition-all duration-300 ease-in hover:bg-[#e700fc] hover:text-white ${active === categorie ? 'bg-[#e700fc] text-white' : ''}`} onClick={()=>{
          dispatch(getProducts(categorie))
          dispatch(reset())
          setActive(categorie)
          dispatch(handleCategory())
          
        }}>{categorie}</div>
      ))}
    </div>
  );
}
