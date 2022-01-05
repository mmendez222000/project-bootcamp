import React from 'react';


const Header = (props) => {
    const {countCartItems} = props;
    return (
        <header className='row block text-right'>
                            
            <div>
                <a href="#/cart" className="cat bi bi-cart">
                    cart
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