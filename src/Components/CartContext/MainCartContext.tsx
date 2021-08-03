import React from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CartContext } from "./CartContext";
import { ICartContext, IDataCart } from "./type";

export const MainCartContext: React.FC = ({ children }) => {
  const [countCart, setCountCart] = useState<number>(0);
  const updateCountCart = useCallback(() => {
    const data: string | null = localStorage.getItem("cart");
    if (data !== null) {
      const newData: Array<IDataCart> = JSON.parse(data);
      const count = newData.length;
      setCountCart(count);
      return;
    }
    setCountCart(0);
  }, []);
  const cartContext: ICartContext = useMemo(() => {
    return {
      setItemCart: (data: IDataCart) => {
        const dataCart: string | null = localStorage.getItem("cart");
        if (dataCart === null) {
          const newData = [];
          newData.push(data);
          const json = JSON.stringify(newData);

          localStorage.setItem("cart", json);
          updateCountCart();
        } else {
          const dataCartArr: Array<IDataCart> = JSON.parse(dataCart);
          const findElement: IDataCart | undefined = dataCartArr.find((e) => {
            if (e.id === data.id && e.size === data.size) {
              return e;
            } else {
              return undefined;
            }
          });
          if (!findElement) {
            dataCartArr.push(data);

            localStorage.setItem("cart", JSON.stringify(dataCartArr));
          } else {
            if (findElement.size !== data.size) {
              dataCartArr.push(data);
              console.log(findElement.size, "findElement-size");
              console.log(data.size, "data-size");

              localStorage.setItem("cart", JSON.stringify(dataCartArr));
            } else {
              const newData = dataCartArr.map((e) => {
                if (e.id === data.id && e.size === data.size) {
                  e.amount = e.amount + 1;
                  return e;
                }
                return e;
              });
              localStorage.setItem("cart", JSON.stringify(newData));
            }
          }
          updateCountCart();
        }
      },
      deleteItemCart: () => {},
      countCart: countCart,
      changeAmount: (id, method) => {
        const data: string | null = localStorage.getItem("cart");
        if (data) {
          const parseData: IDataCart[] = JSON.parse(data);
          const findElement = parseData.find((e) => {
            if (e.id === id) {
              return e;
            }
            return null;
          });
          if (findElement) {
            if (method === "+") {
              findElement.amount = findElement.amount + 1;
            } else {
              findElement.amount = findElement.amount - 1;
              if (findElement.amount === 0) {
                findElement.amount = 1;
              }
            }

            const newData = parseData.filter((e) => e.id !== id);
            newData.push(findElement);
            const pushData = JSON.stringify(newData);
            localStorage.clear();
            localStorage.setItem("cart", pushData);
          }
        }
      },
    };
  }, [countCart, updateCountCart]);

  useEffect(() => {
    updateCountCart();
  }, [updateCountCart]);

  return (
    <div className="main-cart-context">
      <CartContext.Provider value={cartContext}>
        {children}
      </CartContext.Provider>
    </div>
  );
};
