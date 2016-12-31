'use strict';

const service = require('feathers-sequelize');
const tipoProducto = require('./tipoProducto-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: tipoProducto(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/tipoProductos', service(options));

  // Get our initialize service to that we can bind hooks
  const tipoProductoService = app.service('/tipoProductos');

  // Set up our before hooks
  tipoProductoService.before(hooks.before);

  // Set up our after hooks
  tipoProductoService.after(hooks.after);
};
