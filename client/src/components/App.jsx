import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';
import Modal from './Modal';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      currentProduct: '',
      modal: 'hide'
    }
    this.getProducts = this.getProducts.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.changeCurrProduct = this.changeCurrProduct.bind(this);
    this.search = this.search.bind(this);
    this.seeAll = this.seeAll.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }

  // Function to get all products and add to the state
  getProducts(){
    axios.get('/name')
    .then((result) => {
      console.log('Client got the products!')
      this.setState({
        products: result.data,
      })
      return result.data[0]
    })
    .then((result) => {
      if(this.state.currentProduct === ''){
        this.setState({
          currentProduct: result
        })
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // Function to update product
  updateProduct(product){
    axios.put('/name', product)
    .then(() => {
      console.log(product);
      this.setState({
        currentProduct: product
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // Function to change current product
  changeCurrProduct(product){
    this.setState({
      currentProduct: product
    })
  }

  // Function to change product display based on search
  search(term){
    // Filter results if product.item contains search term
    var results = this.state.products.filter(product => product.item.includes(term));
    console.log('search results--->', results);
    this.setState({
      products: results
    })
  }

  seeAll(e){
    this.getProducts();
  }

  addProduct(e){
    document.getElementById('modal').style.display='block';
    this.setState({
      modal: 'display'
    })
  }

  createProduct(product){
    axios.post('/name', product)
    .then(() => {
      console.log('Product added to database!');
      this.getProducts();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // Get products once component renders
  componentDidMount(){
    this.getProducts()
  }

  render(){
    console.log('state--->', this.state)
    return(
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <div>
          <button onClick={this.seeAll}>See All Products</button>
         <button onClick={this.addProduct}>Add a Listing!</button>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.search} getProducts={this.getProducts}/>
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer getProducts={this.getProducts} product={this.state.currentProduct} updateProduct ={this.updateProduct}/>
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList  products={this.state.products} changeCurrProduct={this.changeCurrProduct}/>
          </div>
          <div id='modal'>
            <Modal modal={this.state.modal} createProduct={this.createProduct}/>
          </div>
        </div>
      </div>
    )
  }
}