import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="container w-full flex items-center pb-10 border-b-[1px] justify-between">
      <Link to={"/"} className="flex gap-5 items-center">
        <img width={40} height={40} src="/logo.svg" alt="" />
        <div className="">
          <h2 className="text-[24px] font-extrabold mb-1">REACT PIZZA</h2>
          <div className="text-textGray2 text-[16px]">
            самая вкусная пицца во вселенной
          </div>
        </div>
      </Link>
      <Link
        to="/cart"
        className="bg-orange flex items-center text-white rounded-full py-4 px-6 font-bold"
      >
        <span>0 руб </span>
        <div className="h-5 mx-3 w-[1px] bg-white/50"></div>
        <span>0</span>
      </Link>
    </div>
  );
};
