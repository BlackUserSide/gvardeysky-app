import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getDiscountProduct } from "../../../api/main";
import { IDataProduct } from "../../../types";
import { ItemSaleProduct } from "./ItemSaleProduct";

export const SaleProduct: React.FC = () => {
  const [dataProduct, setDataProduct] = useState<IDataProduct[]>([]);
  useEffect(() => {
    getDiscountProduct()
      .then((res) => {
        if (res) {
          const newData = [];
          for (let i = 0; i < 5; i++) {
            if (res.data[i] !== undefined) {
              newData.push(res.data[i]);
            }
          }
          setDataProduct(newData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {dataProduct.length > 0 ? (
        <div className="sale-product-wrapper">
          <div className="top-line">
            <h2 className="h2">Знижки</h2>
          </div>
          <div className="container-sale-product">
            {dataProduct.map((e, i) => (
              <ItemSaleProduct key={i} content={e} />
            ))}
          </div>
          <div className="link-all-product">
            <Link to="/product/new-product" className="link-all-sale">
              Переглянути усі
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
