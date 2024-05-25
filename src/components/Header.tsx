export const Header = () => {
  return (
    <div className="container w-full flex items-center pb-10 border-b-[1px] justify-between">
      <div className="flex gap-5 items-center">
        <img width={40} height={40} src="/logo.svg" alt="" />
        <div className="">
          <h2 className="text-[24px] font-extrabold mb-1">REACT PIZZA</h2>
          <div className="text-textGray2 text-[16px]">самая вкусная пицца во вселенной</div>
        </div>
      </div>
      <button className="bg-orange text-white rounded-full py-4 px-6 font-bold">0 Руб</button>
    </div>
  );
};
