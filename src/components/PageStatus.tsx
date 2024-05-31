export const PageStatus = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center w-full max-w-[500px] mx-auto">
      <h1 className="h1 mb-3">Корзина пустая</h1>
      <p className="mb-10">
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <img src="/assets/cart-status.svg" alt="cart" />
    </div>
  );
};
