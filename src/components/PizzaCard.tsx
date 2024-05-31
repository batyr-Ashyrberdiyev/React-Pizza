import { Link } from "react-router-dom";

interface IProps {
  title: string;
  img: string;
  price: string;
  id: number;
  rating: number;
}

export const PizzaCard = ({ title, img, price }: IProps) => {
  return (
    <div>
      <Link to={``}>
        <img
          className="mb-3 hover:translate-y-[-5px] transition-all"
          src={img}
          alt="pizza"
        />
      </Link>
      <h2 className="h2 mb-6 leading-[150%]">{title}</h2>

      <div className="flex justify-between items-center">
        <div className="text-[26px] font-bold">{price}</div>
        <button type="button" className="orange-btn">
          Добавить
        </button>
      </div>
    </div>
  );
};
