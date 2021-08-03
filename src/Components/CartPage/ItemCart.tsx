import React from "react";
import { IDataCart } from "../CartContext/type";
import { IDataProduct } from "../../types";
import { useState } from "react";
import { useEffect } from "react";
import { getProductById } from "../../api/main";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
type TProps = {
  content: IDataCart;
  updateCart: () => void;
};
export const ItemCart: React.FC<TProps> = ({ content, updateCart }) => {
  const { changeAmount } = useContext(CartContext);
  const [dataInf, setDataInf] = useState<IDataProduct>({
    brand: "",
    category: 0,
    description: "",
    discont: 0,
    id: 0,
    image: "",
    inOrder: 0,
    name: "",
    price: 0,
  });
  useEffect(() => {
    getProductById(content.id)
      .then((res) => {
        if (res) {
          setDataInf(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [content]);
  const changeProdAmount = (method: string) => {
    if (changeAmount) {
      changeAmount(dataInf.id, method);
      updateCart();
    }
  };
  return (
    <>
      {dataInf.name !== "" ? (
        <div className="item-cart-wrapper">
          <div className="container-item-wrapper">
            <div className="img-wrapper">
              <img
                src={`http://192.168.0.125:8080/img/${dataInf.image}`}
                alt=""
              />
            </div>
            <div className="text-composition">
              <div className="name-wrapper">
                <p>{dataInf.name}</p>
              </div>
              <div className="number-wrapper">
                <p>Артикул: {content.id}</p>
              </div>
              <div className="size-wrapper">
                <p>
                  Розмір: <span>{content.size}</span>{" "}
                </p>
              </div>
            </div>
            <div className="amount-wrapper">
              <span onClick={() => changeProdAmount("+")}>+</span>
              <p>{content.amount}</p>
              <span onClick={() => changeProdAmount("-")}>-</span>
            </div>
            <div className="price-wrapper">
              {dataInf.discont > 0 ? (
                <div className="discount-wrapper">
                  <p className="discount-price">
                    {dataInf.discont * content.amount} грн.
                  </p>
                  <p className="full-price">
                    {dataInf.price * content.amount} грн.
                  </p>
                </div>
              ) : (
                <div className="full-price-wrapper">
                  <p>{dataInf.price * content.amount} грн.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
