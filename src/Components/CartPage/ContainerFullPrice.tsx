import React from "react";
type TProps = {
  fullprice: number;
};
export const ContainerFullPrice: React.FC<TProps> = ({ fullprice }) => {
  return (
    <div className="container-full-price">
      <div className="price-all-wrapper">
        <h4 className="h4">Сумма до сплати</h4>
        <p>{fullprice} грн.</p>
      </div>
    </div>
  );
};
