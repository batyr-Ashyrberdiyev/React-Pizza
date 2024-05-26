import { useQuery } from "@tanstack/react-query";
import pizzasService from "../fetch/pizzas.service";
import { useCategory } from "../zustand/useCategory";
import { useSort } from "../zustand/useSort";

const useGetPizzas = () => {
  const activeCategory = useCategory((state) => state.activeCategory.id);
  const activeSort = useSort((state) => state.activeSort.id);

  const sortByCategory = () =>
    activeCategory !== "all" ? "filter=" + activeCategory : "";

  const sortBySort = () => `&sortBy=${activeSort}`;

  const {
    data: pizzasData,
    isLoading: pizzasIsLoading,
    isSuccess: pizzasIsSuccess,
    isError: pizzasIsError,
  } = useQuery({
    queryKey: ["pizzasData", activeCategory, activeSort],
    queryFn: () => pizzasService.getPizzas(sortByCategory, sortBySort),
    select: ({ data }) => data,
  });

  return {
    pizzasData,
    pizzasIsLoading,
    pizzasIsSuccess,
    pizzasIsError,
  };
};

export default useGetPizzas;
