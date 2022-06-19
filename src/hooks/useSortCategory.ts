import { CartElement } from "../context";
import { IProductItems } from "../declaration";
import { useSort } from "./useSort";

export const useSortCategory = (arr: CartElement[] | IProductItems[]) => {
    return useSort<CartElement | IProductItems>(
        arr, 
        (a, b) => a.category.name.localeCompare(b.category.name),
        (a, b) => b.category.name.localeCompare(a.category.name)
        );
    
}