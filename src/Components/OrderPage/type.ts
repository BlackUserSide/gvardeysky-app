import { IDataCart } from "./../CartContext/type";
export interface IDataOrder {
  fullName: string;
  phoneNumber: string;
  delivery: number;
  city: string;
  postMail: number;
  comment: string;
  payMethod: number;
  address: string;
}
export interface IDataSetOrder {
  typePost: number;
  city: string;
  address: string;
  phoneClient: string;
  typePay: number;
  products: IDataCart[];
  postNumber: number;
  clientName: string;
}
