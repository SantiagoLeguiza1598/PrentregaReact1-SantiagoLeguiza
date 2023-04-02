import React from 'react';

export const CartWidget = (cantCarrito) => {
    return (
        <div>
           <p>Carrito de Compra</p> 
           <p>{cantCarrito}</p>
        </div>
    );
}

export default CartWidget;
