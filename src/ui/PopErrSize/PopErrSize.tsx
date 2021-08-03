import React from "react";
import "./poperrsize.sass";
type TProps = {
  setPop: React.Dispatch<React.SetStateAction<boolean>>;
};
export const PopErrSize: React.FC<TProps> = ({ setPop }) => {
  return (
    <div className="pop-err-wrapper">
      <div
        className="bg-lock"
        onClick={() => {
          setPop(false);
        }}
      ></div>
      <div className="err-mesage-wrapper">
        <h4 className="h4">Помилка</h4>
        <p>Неможливо додати товар без розміру</p>
        <span
          onClick={() => {
            setPop(false);
          }}
        >
          Продовжити
        </span>
      </div>
    </div>
  );
};
