import React from "react";
import { Link } from "react-router-dom";
import "./header.sass";
import cart from "../../img/shopping-cart.svg";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { useState } from "react";
import { useEffect } from "react";
export const Header: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const { countCart } = useContext(CartContext);
  useEffect(() => {
    if (countCart) {
      setCount(countCart);
    }

    return;
  }, [countCart]);
  return (
    <header className="site-header">
      <div className="logo-wrapper">
        <p>Logo</p>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/new-product" className="link-main">
              Новинки
            </Link>
          </li>
          <li>
            <Link to="/sale" className="link-main">
              Знижки
            </Link>
          </li>
          <li>
            <Link to="/clothes" className="link-main">
              Одяг
            </Link>
          </li>
          <li>
            <Link to="/shoes" className="link-main">
              Взуття
            </Link>
          </li>
          <li>
            <Link to="/bags" className="link-main">
              Сумки і Рюкзаки
            </Link>
          </li>
          <li>
            <Link to="/accessories" className="link-main">
              Аксесуари
            </Link>
          </li>
          <li>
            <Link to="/cart" className="link-main-cart">
              <img src={cart} alt="" />
              {count > 0 ? (
                <div className="count-wrapper">
                  <span>{count}</span>
                </div>
              ) : (
                ""
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
