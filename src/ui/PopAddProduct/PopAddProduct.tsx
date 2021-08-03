import React from "react";
import { Link } from "react-router-dom";
import "./popappadproduct.sass";
type TProps = {
  setPop: React.Dispatch<React.SetStateAction<boolean>>;
};
export const PopAddProduct: React.FC<TProps> = ({ setPop }) => {
  return (
    <div className="pop-add-product">
      <div
        className="bg-lock"
        onClick={() => {
          setPop(false);
        }}
      ></div>
      <div className="pop-form-add-product">
        <h3 className="h3">Ви добавили товар до кошику</h3>
        <div className="btn-wrapper">
          <span
            className="btn-cont-shop"
            onClick={() => {
              setPop(false);
            }}
          >
            Продовжити покупки
          </span>
          <Link to="/cart" className="link-to-cart">
            Перейти до кошика
          </Link>
        </div>
      </div>
    </div>
  );
};
