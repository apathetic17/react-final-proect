import React from "react";
import { SetStateAction } from "react";
import { Dispatch } from "react";


interface Category {
    id: string
    name: string
  }

export interface CartElement {
    name: string
    category: Category
    price: number
    amount: number
    id: string
}

export interface ContextType {
    cart: CartElement[],
    setCart: Dispatch<SetStateAction<CartElement[]>> 
}

const ContextCart = React.createContext <null | ContextType>(null)

export default ContextCart;