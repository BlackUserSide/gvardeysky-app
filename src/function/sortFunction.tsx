import { IDataCart } from "../Components/CartContext/type";

export const sortFunction = (a: IDataCart, b: IDataCart) => {
  if (a.id > b.id) {
    return 1;
  }
  if (a.id < b.id) {
    return -1;
  }
  return 0;
};
