import React from "react";
import "./mainpage.sass";
import { NewProduct } from "./NewProduct/NewProduct";
import { SaleProduct } from "./SaleProduct/SaleProduct";
export const MainPage: React.FC = () => {
  return (
    <div className="main-page-wrapper">
      <div className="first-screen-action">
        <h1 className="h1">Тут должно быть поп фото</h1>
        <div className="link-put"></div>
      </div>
      <NewProduct />
      <SaleProduct />
    </div>
  );
};
