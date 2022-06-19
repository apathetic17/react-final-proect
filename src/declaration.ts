import { CartElement } from "./context"

export interface IProductItems { 
    category: {
        name: string
        id: string
    }
    name: string
    price: number
}

export type IAddItem = (item: CartElement) => void