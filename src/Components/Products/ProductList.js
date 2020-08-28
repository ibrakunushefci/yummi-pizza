import React from 'react';
import Product from './Product';

function ProductList({ products }) {
   const styles = {
      "display": "flex",
   }

   return (
      <div style={styles}>
         {products.map(product => {
            return <Product product={product} key={product.id} />
         })}
      </div>
   );
}

export default ProductList;