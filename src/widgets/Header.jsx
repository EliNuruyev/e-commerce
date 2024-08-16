import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { getProducts, handleSearch, resetProducts } from "../redux/slices/ProductsSlice";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    dispatch(getProducts());
    dispatch(resetProducts());
    window.location.reload()
  };

  let inpRef = useRef();

  return (
    <header className="flex justify-between w-10/12 items-center m-auto gap-2 border-b border-[#37003c] mb-5">
      <Link to="/" className="flex-1 h-[100px] flex items-center">
        <img
          className="w-[100px] cursor-pointer"
          src="https://seeklogo.com/images/E/e-commerce-concept-logo-5146F23CC5-seeklogo.com.png"
          alt="Logo"
          onClick={handleLogoClick}
        />
      </Link>
      <div className="flex-[3] flex items-center border rounded-[10px] bg-[#f3f3f3] focus-within:border-[#37003c]">
        <CiSearch size={25} className="mx-2" />
        <input type="text" className="w-full p-2 outline-none bg-transparent" ref={inpRef} onChange={() => dispatch(handleSearch(inpRef.current.value))}/>
      
      </div>
      <div className="flex-1 flex justify-center items-center gap-4">
        <IoMdHeartEmpty size={25} color="#37003c" />
        <div className="relative flex items-center">
          <span className="absolute top-[-18px] right-[-10px] bg-red-500 rounded-full w-[20px] h-[20px] flex items-center justify-center font-semibold text-white">0</span>
          <SlBasket size={25} color="#37003c" />
        </div>
      </div>
    </header>
  );
};

export default Header;