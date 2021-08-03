export interface ICartContext {
  countCart: number;
  setItemCart: (data: IDataCart) => void;
  deleteItemCart: () => void;
  changeAmount: (id: number, method: string) => void;
}

export type IDataCart = {
  id: number;
  amount: number;
  size: string;
};
