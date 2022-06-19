import { CartElement } from "../context";
import { IProductItems } from "../declaration";
import { useSort } from "./useSort";

export const useSortPrice = (arr: CartElement[] | IProductItems[]) => {
    return useSort<CartElement | IProductItems>(
        arr, 
        (a, b) => a.price - b.price,
        (a, b) => b.price - a.price
        );
    
}