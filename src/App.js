import React, { useState } from 'react';
import ProductList from './Components/Products/ProductList';

function App() {
  const [products, setProducts] = useState(SAMPLE_PRODUCTS)

  return (
    <ProductList products={products} />
  );
}

export default App;


const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: "Product 1",
    price: "$250",
    description: "Lorem ipsum dolor sit amet"
  },
  {
    id: 2,
    title: "Product 2",
    price: "$250",
    description: "Lorem ipsum dolor sit amet"
  },
  {
    id: 3,
    title: "Product 3",
    price: "$250",
    description: "Lorem ipsum dolor sit amet"
  }
]