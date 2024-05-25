import axios from 'axios';
import { PizzaType } from '../types/getPizzas.type';

class expoPizzas {
  private URL = 'https://6651dbbf20f4f4c44278f017.mockapi.io';

  getPizzas = async () => {
    return await axios.get<PizzaType[]>(`${this.URL}/pizzas`);
  };
}

export default new expoPizzas();
