// Express Server
// FIX ME :(
  const express = require('express');
  const path = require('path');
  const router = require('./router');
  const bodyParser = require('body-parser');
  const cors = require('cors');
  const port = 3000;
  const controller = require('./controller.js');

  const server = express();
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())
  server.use(cors());
  
  server.use('/', express.static(path.join(__dirname + '/../client/dist')));
  server.use(router);

  router.route('/name')
    .get(controller.get)
    .post(controller.post)
    .put(controller.put)
  router.route('/name/:_id')
    .delete(controller.delete)


  server.listen(port, () => console.log('Connected to port: 3000'))