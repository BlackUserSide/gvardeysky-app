import React from "react";
import { ICartContext } from "./type";

export const CartContext = React.createContext<Partial<ICartContext>>({});
