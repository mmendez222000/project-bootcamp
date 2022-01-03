import React from 'react'

const Product = (props) => {
    const {product, onAdd} = props;
    return (
        
            <label>
                    <img className='small' src={product.image} alt={product.name}></img>&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h3 className='form-label'>{product.name}</h3>
                    <div className='form-label'>${product.price}</div>
                    <div>   
                        <button className='btn btn-primary' onClick={() => onAdd(product)} >Agregar</button>
                    </div>
                    <br></br>

            </label>
        
        
        
    )
}

export default Product;