import React from "react";
import "./cardpage.sass";

import { useState } from "react";
import { IDataCart } from "../CartContext/type";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { IDataProduct } from "../../types";
import { useEffect } from "react";
import { getCategoryId, getProductById } from "../../api/main";
import { useParams } from "react-router-dom";
import { PopErrSize } from "../../ui/PopErrSize/PopErrSize";
import { PopAddProduct } from "../../ui/PopAddProduct/PopAddProduct";
type TParams = {
  id: string;
};
export const CardPage: React.FC = () => {
  const params: TParams = useParams();
  const [activeSize, setActiveSize] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [popErr, setPopErr] = useState<boolean>(false);
  const [popAddProduct, setPopAddProduct] = useState<boolean>(false);
  const [dataProduct, setDataProduct] = useState<IDataProduct>({
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
  const { setItemCart } = useContext(CartContext);
  const addToCart = () => {
    if (activeSize !== "") {
      const data: IDataCart = {
        id: dataProduct.id,
        size: activeSize,
        amount: 1,
      };
      if (setItemCart) {
        setItemCart(data);
        setPopAddProduct(true);
      }
    } else {
      setPopErr(true);
    }
  };
  useEffect(() => {
    getProductById(+params.id)
      .then((res) => {
        if (res) {
          setDataProduct(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    getCategoryId(dataProduct.category)
      .then((res) => {
        if (res) {
          setCategory(res.data.name);
        }
      })
      .catch((err) => console.log(err));
  }, [params, dataProduct.category]);
  return (
    <>
      {dataProduct.name !== "" ? (
        <div className="card-page-wrapper">
          <div className="container-item">
            <div className="image-wrapper">
              <div className="image-container">
                <img
                  src={`http://192.168.1.119:8080/img/${dataProduct.image}`}
                  alt=""
                />
              </div>
            </div>
            <div className="text-composition">
              <div className="name-wrapper">
                <h1 className="h1">{dataProduct.name}</h1>
              </div>
              <div className="info-wrapper">
                <p>Артикул: {dataProduct.id}</p>
                <p>Категорія: {category}</p>
                <p>Бренд: {dataProduct.brand}</p>
              </div>
              {dataProduct.discont !== 0 ? (
                <div className="price-wrapper-discount">
                  <p className="discount-price">{dataProduct.discont} грн.</p>
                  <p className="full-price">{dataProduct.price}</p>
                </div>
              ) : (
                <div className="price-wrapper">
                  <p>{dataProduct.price} грн.</p>
                </div>
              )}
              <div className="size-wrapper">
                <p>Розмір</p>
                <div className="block-wrapper">
                  <span
                    onClick={() => setActiveSize("xs")}
                    className={`size-btn ${
                      activeSize === "xs" ? "active-size" : ""
                    }`}
                  >
                    XS
                  </span>
                  <span
                    onClick={() => setActiveSize("s")}
                    className={`size-btn ${
                      activeSize === "s" ? "active-size" : ""
                    }`}
                  >
                    S
                  </span>
                  <span
                    onClick={() => setActiveSize("m")}
                    className={`size-btn ${
                      activeSize === "m" ? "active-size" : ""
                    }`}
                  >
                    m
                  </span>
                  <span
                    onClick={() => setActiveSize("l")}
                    className={`size-btn ${
                      activeSize === "l" ? "active-size" : ""
                    }`}
                  >
                    L
                  </span>
                  <span
                    onClick={() => setActiveSize("xl")}
                    className={`size-btn ${
                      activeSize === "xl" ? "active-size" : ""
                    }`}
                  >
                    XL
                  </span>
                  <span
                    onClick={() => setActiveSize("xxl")}
                    className={`size-btn ${
                      activeSize === "xxl" ? "active-size" : ""
                    }`}
                  >
                    XXL
                  </span>
                </div>
              </div>
              <div className="btn-wrapper">
                <span className="add-to-cart" onClick={addToCart}>
                  додати в кошик
                </span>
                <span className="bay-to-click">купити в один клік</span>
              </div>
            </div>
          </div>
          {popErr ? <PopErrSize setPop={setPopErr} /> : ""}
          {popAddProduct ? <PopAddProduct setPop={setPopAddProduct} /> : ""}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
