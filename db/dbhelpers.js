var Product = require('./');
// complete the dbhelpers
var helpers = {
  getProductsHelper: () => {
    // findAll, return results
    return Product.find({})
  },
  // Accepts product as schema-formatted object
  postProductsHelper: ( product ) => {
    // Add product to database using .create
    return Product.create(product)
  },
  // Accepts product as schema-formatted object
  updateProductHelper: ( product ) => {
    // Get _id of product
    var id = product._id;
    // Using the id as the filter, re-add the whole product
    return Product.updateOne({ id }, product)
  },
  // Accepts id of product to be deleted
  deleteProductHelper: ( _id ) => {
    return Product.deleteOne({ _id })
  }
};

module.exports = helpers