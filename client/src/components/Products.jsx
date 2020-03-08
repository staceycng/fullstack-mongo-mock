import React from 'react';
  
const Products = (props) => {
  var product = props.product;
  var changeCurrProduct = props.changeCurrProduct;

  var handleChange = (e) => {
    console.log('click!');
    changeCurrProduct(product);
  }

   return(
    <div className='product-list-entry'>
      <div className='product-list-detail'>
        <img src={product.image} className='listimages' onClick={handleChange}></img>
        <h4 className="product-name" onClick={handleChange}>{product.item}</h4>
        <span onClick={handleChange}>Current Bid: {product.curr_bid}</span><br></br>
        <span onClick={handleChange}>Bid Ends in {product.ends_in} Days!</span><br></br>
        </div>
    </div>
  )
}

export default Products