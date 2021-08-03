import React from "react";
import { Link } from "react-router-dom";
import { IDataProduct } from "../../../types";
type TProps = {
  content: IDataProduct;
};
export const ItemNewProduct: React.FC<TProps> = ({ content }) => {
  return (
    <div className="item-block-wrapper">
      <Link to={`/product/${content.id}`}>
        <div className="sticker-new-product">
          <span>NEW</span>
        </div>
        <div className="image-item">
          <img
            src={`http://192.168.0.125:8080/img/${content.image}`}
            alt="item"
          />
        </div>
        <div className="name-wrapper">
          <p>{content.name}</p>
        </div>
        <div className="price-wrapper">
          <p>{content.price} грн.</p>
        </div>
      </Link>
    </div>
  );
};
