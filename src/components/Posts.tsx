import React, {FC} from 'react';
import TablePosts from './TablePosts';

import { IAddItem } from '../declaration';
import { IProductItems } from '../declaration'

interface IPostsProps {
    handleClick: IAddItem
    products: IProductItems[]
}

const Posts: FC<IPostsProps> = ({handleClick, products}) => {

    return (
        <div>  
            { products.map((product) => <TablePosts key={product.name} product={product} handleClick={handleClick}/>)}
        </div>
    );
};

export default Posts;