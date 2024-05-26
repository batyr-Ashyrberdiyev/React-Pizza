import Category from "../components/Category";
import { PizzaCard } from "../components/PizzaCard";
import { SortModal } from "../components/SortModal";
import { categoriesData } from "../lib/database/category.data";
import useGetPizzas from "../lib/hooks/useGetPizzas";
import { useCategory } from "../lib/zustand/useCategory";
import { v4 } from "uuid";

const HomePage = () => {
  const { pizzasData } = useGetPizzas();

  const activeCategory = useCategory((state) => state.activeCategory);

  return (
    <div className="container pt-10">
      <div className="flex lg:flex-row flex-col gap-5 lg:items-center justify-between mb-20">
        <div className="flex  items-center gap-5">
          {categoriesData.map((item) => (
            <Category
              key={v4()}
              active={activeCategory.id === item.id}
              {...item}
            />
          ))}
        </div>

        <SortModal />
      </div>

      <h1 className="h1 mb-10">Все пиццы</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-x-5 gap-y-10">
        {pizzasData?.map((item) => (
          <PizzaCard key={v4()} {...item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
