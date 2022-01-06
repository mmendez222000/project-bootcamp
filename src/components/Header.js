import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { BsCart } from "react-icons/bs";

const Header = (props) => {
    const {countCartItems} = props;
    return (
        <header className='color row block'>
            <div className='text-center'><h1>Filtros Para Aire</h1></div>
            <div className=' text-right'>
                <a href="#/cart">
                    <BsCart size={70} />
                    {' '}
                    {countCartItems? (
                        <button className=''>{countCartItems}</button>
                    ): ('')

                }
                </a>
            </div>
        </header>
    );
}

export default Header;