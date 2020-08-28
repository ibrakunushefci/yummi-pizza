import React from 'react';
import './Product.styles.scss';

function Product({ product }) {
   return (
      <div class="wrapper">
         <div class="container">
            <div class="top"></div>
            <div class="bottom">
               <div class="left">
                  <div class="details">
                     <h1>{product.title}</h1>
                     <p>{product.price}</p>
                  </div>
                  <div class="buy"><i class="material-icons">add_shopping_cart</i></div>
               </div>
               <div class="right">
                  <div class="done"><i class="material-icons">done</i></div>
                  <div class="details">
                     <h1>{product.title}</h1>
                     <p>Added to your cart</p>
                  </div>
                  <div class="remove"><i class="material-icons">clear</i></div>
               </div>
            </div>
         </div>
         <div class="inside">
            <div class="icon"><i class="material-icons">info_outline</i></div>
            <div class="contents">
               <p>{product.description}</p>
            </div>
         </div>
      </div>
   );
}

export default Product;