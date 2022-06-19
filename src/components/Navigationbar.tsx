import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

interface INavigationbarProps {
    navbarItem: string
    link: string
}

const Navigationbar: FC<INavigationbarProps> = ({navbarItem, link}) => {
    return (
        <div>
            <Link to={'/'}>
                Home 
            </Link>
            &emsp;  

            <Link to={link}>
                {navbarItem}
            </Link>
        </div>
    );
};

export default Navigationbar;


