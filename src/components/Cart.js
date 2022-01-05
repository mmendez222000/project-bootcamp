import React from 'react';

const Basket = (props) => {
    
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,b)=> a + b.price * b.qty, 0 );
    const taxPrice = itemsPrice / 1.12 * 0.12;
    const shippingPrice = itemsPrice > 500 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return <aside className='block col-1'>
        <h2>Carrito</h2>
        <div>
            {cartItems.length === 0 && <div>Carrito Vacio</div>} 
        </div>
        {cartItems.map((item)=>(
            <div key={item.id} className='row col-2'>
                <div className='col-2'>   
                    {item.name}
                </div>
                <div className='col-2'>
                    <div className="btn-group">
                        <a title="Editar" href="#" onClick={()=>onAdd(item)} className="btn btm-sm btn-outline-secondary">
                        <i className="bi bi-plus-lg"></i>
                        </a>
                        <a title="Eliminar" href="#" onClick={()=>onRemove(item)} className="btn btm-sm btn-outline-danger">
                        <i className="bi bi-dash-lg"></i>
                        </a>
                    </div>     

                </div>
                <div className='col-2 text-right'>
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
            </div>
        ))}
        {cartItems.length !== 0 && (
            <>
                <hr></hr>
                <div className='row'>
                    <div className='col-2'>Items Price</div>
                    <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'>Tax Price</div>
                    <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'>Shipping Price</div>
                    <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'><strong>Total Price</strong></div>
                    <div className='col-1 text-right'><strong>${totalPrice.toFixed(2)}</strong></div>
                </div>
                <hr/>
                <div className='row'>
                    <button className='btn btn-primary' onClick={() => alert('Implement Checkout')}>CheckOut</button>
                </div>
            </>
        )}
    </aside>;
}
export default Basket;
