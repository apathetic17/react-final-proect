import React, { FC, useContext } from 'react';
import Navigationbar from '../components/Navigationbar';
import CartItems from '../components/CartItems';
import Tableheader from '../components/Tableheader';
import ContextCart, { CartElement, ContextType } from '../context';
import { useSortCategory } from '../hooks/useSortCategory';
import { useSortPrice } from '../hooks/useSortPrice';

const Followed: FC = () => {
    const {cart, setCart} = useContext(ContextCart) as ContextType

    
    const sortByCategory = useSortCategory(cart);
    const sortByPrice = useSortPrice(cart);
    
    const sortCategory = () => {
          setCart(sortByCategory() as CartElement[]) 
    } 

    const sortPrice = () => {
          setCart(sortByPrice() as CartElement[])
    } 

    return (
        <div>
            <Navigationbar navbarItem={'Main List'} link={"/MainList"}/>
            <Tableheader sortCategory={sortCategory} sortPrice={sortPrice}/>
            <CartItems/>
        </div>
    );
};

export default Followed;