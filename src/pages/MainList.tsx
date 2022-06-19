import React, {useContext, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navigationbar from '../components/Navigationbar'
import Tableheader from '../components/Tableheader';
import Posts from '../components/Posts';
import ContextCart, { ContextType } from '../context';
import { IAddItem } from '../declaration';
import { IProductItems } from '../declaration';
import { getProducts } from '../api/api';

import { useSortPrice } from '../hooks/useSortPrice';
import { useSortCategory } from '../hooks/useSortCategory';

const MainList = () => {
  const {cart, setCart} = useContext(ContextCart) as ContextType
  const [products, setProducts] = useState<IProductItems[]>([])
  

  const handleClick: IAddItem = (item) => {
        if (cart.find((cartitem) => cartitem.id === item.id)) return;
        setCart([...cart, {...item, amount:1}]);
    };

    const sortByCategory = useSortCategory(products);
    const sortByPrice = useSortPrice(products);
    
    useEffect(() => {
        getProducts().then((data: IProductItems[]) => setProducts(data))
    }, [])
 
    const sortCategory = () => {
          setProducts(sortByCategory() as IProductItems[])
    } 

    const sortPrice = () => {
          setProducts(sortByPrice() as IProductItems[])
    } 


  return (
    <div>
        <Navigationbar  navbarItem={'Followed Products'}  link={"/Followed"}/>
        <Tableheader sortCategory={sortCategory} sortPrice={sortPrice}/>
        <Posts products={products} handleClick={handleClick}/>
    </div>
  )
}

export default MainList;









