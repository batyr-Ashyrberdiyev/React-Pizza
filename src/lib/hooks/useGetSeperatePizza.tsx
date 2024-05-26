import { useQuery } from "@tanstack/react-query";
import pizzasService from "../fetch/pizzas.service";

const useGetSeperatePizza = (id: number) => {
  const {
    data: seperatePizzaData,
    isLoading: seperatePizzaIsLoading,
    isSuccess: seperatePizzaIsSuccess,
    isError: seperatePizzaIsError,
  } = useQuery({
    queryKey: ["seperatePizzaData"],
    queryFn: () => pizzasService.getSeperatePizza(id),
    select: ({ data }) => data,
  });

  return {
    seperatePizzaData,
    seperatePizzaIsLoading,
    seperatePizzaIsError,
    seperatePizzaIsSuccess,
  };
};

export default useGetSeperatePizza;
