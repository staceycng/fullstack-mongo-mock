import React from 'react';
import Products from './Products';
  
const ProductList = (props) => {
  var products = props.products;
   return(
    <div className='product-list'>
      <div clasName='product-list-container'>
        <span className='product-list-entry-title'>Current Products: </span>
        {products.map((product) => (<Products product={product} changeCurrProduct={props.changeCurrProduct}/>))}
      </div>
    </div>
  )
}

export default ProductList