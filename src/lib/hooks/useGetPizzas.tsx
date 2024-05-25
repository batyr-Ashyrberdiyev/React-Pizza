import { useQuery } from '@tanstack/react-query';
import pizzasService from '../fetch/pizzas.service';
import { useCategory } from '../zustand/useCategory';

const useGetPizzas = () => {
  const acivecategory = useCategory((state) => state.activeCategory.id);

  const {
    data: pizzasData,
    isLoading: pizzasIsLoading,
    isSuccess: pizzasIsSuccess,
    isError: pizzasIsError,
  } = useQuery({
    queryKey: ['pizzasData', acivecategory],
    queryFn: () => pizzasService.getPizzas(),
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
