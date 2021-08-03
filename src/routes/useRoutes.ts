import { CartPage } from "./../Components/CartPage/CartPage";
import { CardPage } from "./../Components/CardPage/CardPage";
import { MainPage } from "./../Components/MainPage/MainPage";
import { TRoutesWrapper } from "./RoutesContext";

export const useRoutes: TRoutesWrapper = {
  routes: [
    { path: "/", exact: true, component: MainPage, routes: [] },
    { path: "/product/:id", exact: false, component: CardPage, routes: [] },
    { path: "/cart", exact: false, component: CartPage, routes: [] },
  ],
};
