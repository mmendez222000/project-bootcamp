import React from 'react';
import { BsCartX } from "react-icons/bs";

const Cart = (props) => {
    
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,b)=> a + b.price * b.qty, 0 )/ 1.12;
    const taxPrice = itemsPrice * 0.12;
    const shippingPrice = itemsPrice > 500 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return <aside className='block col-1'>
        <h1 className='text-center'>Carrito</h1>
        <div>
            {cartItems.length === 0 && <div className='text-center'>
                <BsCartX size={50} />Sin Productos
            </div>} 
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
                    {item.qty} x Q.{item.price.toFixed(2)}
                </div>
            </div>
        ))}
        {cartItems.length !== 0 && (
            <>
                <hr></hr>
                <div className='row'>
                    <div className='col-2'>Sub Total</div>
                    <div className='col-1 text-right'>Q.{itemsPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'>IVA</div>
                    <div className='col-1 text-right'>Q.{taxPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'>Envio</div>
                    <div className='col-1 text-right'>Q.{shippingPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'><strong>Total a Pagar</strong></div>
                    <div className='col-1 text-right'><strong>Q.{totalPrice.toFixed(2)}</strong></div>
                </div>
                <hr/>
                <div className='row'>
                    <button className='btn btn-primary' onClick={() => alert('Pendiente')}>CheckOut</button>
                </div>
            </>
        )}
    </aside>;
}
export default Cart;
