import React from "react";
import { MainCartContext } from "./Components/CartContext/MainCartContext";
import { Header } from "./Components/Header/Header";
import "./main.sass";
import { MainRoutes } from "./routes/MainRouter";
import { RoutesContext } from "./routes/RoutesContext";
import { useRoutes } from "./routes/useRoutes";
export const App: React.FC = () => {
  return (
    <div className="main-wrapper">
      <RoutesContext.Provider value={useRoutes}>
        <MainCartContext>
          <Header />
          <MainRoutes />
        </MainCartContext>
      </RoutesContext.Provider>
    </div>
  );
};
