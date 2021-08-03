import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../../../api/main";
import { IDataProduct } from "../../../types";
import { ItemNewProduct } from "./ItemNewProduct";

export const NewProduct: React.FC = () => {
  const [dataProduct, setDataProduct] = useState<IDataProduct[]>([]);
  useEffect(() => {
    getProduct()
      .then((res) => {
        if (res) {
          const newData = [];

          for (let i = 0; i < 5; i++) {
            if (res.data.data[i] !== undefined) {
              if (res.data.data[i].discont === 0) {
                newData.push(res.data.data[i]);
              }
            }
          }
          setDataProduct(newData);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(dataProduct);

  return (
    <div className="new-product-wrapper">
      <div className="top-line">
        <h2 className="h2">Нові товари</h2>
      </div>

      <div className="container-items-product">
        {dataProduct.map((e, i) => (
          <ItemNewProduct content={e} key={i} />
        ))}
      </div>
      <div className="link-all-product">
        <Link to="/product/new-product" className="link-all-new">
          Переглянути усі
        </Link>
      </div>
    </div>
  );
};
