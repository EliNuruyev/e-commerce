// eslint-disable-next-line react/prop-types
export default function Card({ product, onClick }) {
  return (
    <div
      className="p-2 h-max border-[#f3f3f3] cursor-pointer "
      onClick={onClick}
    >
      <div className="flex items-center justify-center  border  relative p-2">
        <span className="absolute left-0 top-0 bg-[#e700fc] py-[3px] px-[18px] text-xs font-bold text-white capitalize">
          {product.category}
        </span>
        <span className="absolute right-3 top-3 bg-[#ebff00] p-2 text-[#37003c] ">
          {product.price} $
        </span>
        <img
          src={product.image}
          alt="item"
          className="w-[150px] h-[150px] object-contain"
        />
      </div>
      <p className="text-center">{product.title}</p>
    </div>
  );
}
