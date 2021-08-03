import React from "react";
import { Link } from "react-router-dom";
import { IDataProduct } from "../../../types";
type TProps = {
  content: IDataProduct;
};
export const ItemSaleProduct: React.FC<TProps> = ({ content }) => {
  return (
    <div className="item-block-wrapper">
      <Link to={`/product/${content.id}`}>
        <div className="sticker-new-product">
          <span>
            -{Math.round(100 - (content.discont * 100) / content.price)}
          </span>
        </div>
        <div className="image-item">
          <img
            src={`http://192.168.0.125:8080/img/${content.image}`}
            alt="item"
          />
        </div>
        <div className="name-wrapper">
          <p>{content.name} </p>
        </div>
        <div className="price-wrapper">
          <p className="discount-wrapper">{content.discont} грн.</p>
          <p className="full-wrapper">{content.price} грн.</p>
        </div>
      </Link>
    </div>
  );
};
