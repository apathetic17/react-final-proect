import React, {useContext} from 'react';
import { Table } from 'reactstrap';
import ContextCart, { ContextType } from '../context';
import { CartElement } from '../context';


const CartItems = () => {
    const {cart, setCart} = useContext(ContextCart) as ContextType

    const handleRemove = (id: string) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    };


    const handleChange = (item: CartElement, d: -1 | 1) => {
        let obj = cart.find((cartitem) => cartitem.id === item.id);
        if (obj) {
          obj.amount += d;
          if (obj.amount === 0) obj.amount = 1;
          setCart([...cart]);
        }
      }
    
    return (
        <article>
            {cart.map((item) => (
            <div key={item.id}>
                 <Table bordered hover>
                <tbody>
                        <tr>
                            <th scope="row">
                                {item.category.name}
                            </th>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.price * item.amount}$
                            </td>
                            <td>
                                <button onClick={() => handleChange(item, -1)}>-</button>
                                <button>{item.amount}</button>
                                <button onClick={() => handleChange(item, 1)}>+</button>
                            </td>
                            <td>
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </td>
                        </tr>
                </tbody>
            </Table>
            </div>
            ))}
        </article>
        )
};

export default CartItems;

