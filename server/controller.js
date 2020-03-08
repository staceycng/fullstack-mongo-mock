// Controller here
var helper = require('../db/dbhelpers.js');
var Product = require('../db/');

const controller = {
  get: (req, res) => {
    helper.getProductsHelper()
    .then((result) => {
      console.log('Result got!');
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  },
  post: (req, res) => {
    helper.postProductsHelper(req.body)
    .then(() => {
      console.log('Product successfully inserted!');
      res.status(200).send('Success!');
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  },
  put: (req, res) => {
    helper.updateProductHelper(req.body)
    .then(() => {
      console.log('Product successfully updated!');
      res.status(200).send('Success!');
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  },
  delete: (req, res) => {
    console.log('params-->', req.params);
    helper.deleteProductHelper(req.params._id)
    .then(() => {
      console.log('Product successfully deleted!');
      res.status(200).send('Success!');
    })
    .catch((err) => {
      res.status(400).send(err);
    })
  }
}

module.exports = controller