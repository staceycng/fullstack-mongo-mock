import React from 'react';
import axios from 'axios';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
    this.handleBid = this.handleBid.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleBid(e){
    e.preventDefault();
    // Get value of new bid from input
    var newBid = Number(e.target.bid.value);
    // Declare variable for curr pdouct
    var product = this.props.product;
    // Set curr product's bid to the new bid
    product.curr_bid = newBid;
    // Call function to update product
    this.props.updateProduct(product);
  }

  delete(e){
    axios.delete(`/name/${this.props.product._id}`)
    .then(() => {
      console.log('Deleted item!')
    })
    .catch((err) => {
      console.log(err);
    })

    this.props.getProducts();
  }
  
  render(){
    return(
      <div className = 'product-viewer'>
        <div className='product-viewer-container'>
          <img src={this.props.product.image}></img>
          <h1>{this.props.product.item}</h1>
          <div className = 'product-viewer-details'>
            <p>
              Current Bid: ${this.props.product.curr_bid}<br></br>
              Original Posting Price: ${this.props.product.min_cost}<br></br>
              Bidding Ends In {this.props.product.ends_in} Days!
            </p>
            <form onSubmit={this.handleBid}>
              <label>New Bid:</label>
              <input type="text" name="bid"></input>
              <input type="submit" value="Submit!"></input>
            </form>
            <button onClick={this.delete}>Delete Item</button>
          </div>
        </div>
      </div>
    )
  }
}