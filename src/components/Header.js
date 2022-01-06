import React from 'react';
import { BsCart } from "react-icons/bs";

const Header = (props) => {
    const {countCartItems} = props;
    return (
        <header className='color row block'>
            <h1 className='text-center'>Filtros Para Aire</h1>
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