import axios from "axios";
import { PizzaType } from "../types/getPizzas.type";

class expoPizzas {
  private URL = "https://6651dbbf20f4f4c44278f017.mockapi.io";

  getPizzas = async (
    sortByCategory: () => string,
    sortBySort: () => string
  ) => {
    return await axios.get<PizzaType[]>(
      `${this.URL}/pizzas?${sortByCategory()}${sortBySort()}`
    );
  };

  getSeperatePizza = async (id: number) => {
    return await axios.get<PizzaType>(`${this.URL}/pizzas/${id}`);
  };
}

export default new expoPizzas();
