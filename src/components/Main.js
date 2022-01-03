import React from 'react';
import Product from './Product';

export default function Main(props){
    const {products, onAdd}=props;
    return <main className='row block col-2'>
        <h1>Productos</h1>
        <table>
            <tbody>
                <tr>
                    {products.map((product)=>(
                        <Product key={product.id} product={product} onAdd={onAdd}></Product>
                    ))}
                </tr>
            </tbody>
        </table>
        
    </main>;
}