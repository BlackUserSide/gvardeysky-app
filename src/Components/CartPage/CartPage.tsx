import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getCartProduct } from "../../api/main";
import { sortFunction } from "../../function/sortFunction";
import deleteImg from "../../img/delete.svg";

import { IDataCart } from "../CartContext/type";
import "./cart.sass";
import { ContainerFullPrice } from "./ContainerFullPrice";
import { ItemCart } from "./ItemCart";

export const CartPage: React.FC = () => {
  const [dataCart, setDataCart] = useState<Array<IDataCart>>([]);

  const updateCart = useCallback(() => {
    let data: string | null = localStorage.getItem("cart");
    if (data) {
      const parseData: Array<IDataCart> = JSON.parse(data);
      parseData.sort(sortFunction);
      setDataCart(parseData);
    } else {
      setDataCart([]);
    }
  }, []);

  useEffect(() => {
    updateCart();
  }, [updateCart]);
  const clearCart = () => {
    localStorage.removeItem("cart");
    updateCart();
  };
  const [fullPrice, setFullPrice] = useState<number>(0);

  useEffect(() => {
    const data: string | null = localStorage.getItem("cart");
    if (data) {
      const parseData: IDataCart[] = JSON.parse(data);
      const newData: number[] = [];

      parseData.map((e) => {
        newData.push(e.id);
        return e;
      });

      getCartProduct(newData)
        .then((res) => {
          if (res) {
            const dataRes = res.data;
            let fullPrice = 0;
            dataRes.map((e: any) => {
              if (e.discont === 0) {
                fullPrice += e.price;
                return e;
              } else {
                fullPrice += e.discont;
                return e;
              }
            });
            setFullPrice(fullPrice);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <div className="main-cart-page">
      <div className="top-line">
        <h1 className="h1">Кошик</h1>
        <div className="dell-cart">
          <img src={deleteImg} alt="" />
          <span onClick={clearCart}> Очистити кошик</span>
        </div>
      </div>
      <div className="container-cart">
        <div className="container-item">
          {dataCart.map((e, i) => (
            <ItemCart content={e} key={i} updateCart={updateCart} />
          ))}
        </div>

        <ContainerFullPrice fullprice={fullPrice} />
      </div>
    </div>
  );
};
