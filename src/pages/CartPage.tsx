import { PageStatus } from "../components/PageStatus";

const CartPage = () => {
  return (
    <div className="container pt-10 h-full w-[300px]">
      <h1 className="h1">Корзина</h1>
      <PageStatus />
    </div>
  );
};

export default CartPage;
