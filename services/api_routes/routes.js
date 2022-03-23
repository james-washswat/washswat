'use strict';

const controller = require('../controllers/controller');

module.exports = (app) => {
    app.route('/about').get(controller.about);
    app.route('/orders/:orderId').get(controller.getOrder);
    app.route('/orders/:orderId').delete(controller.delOrder);
}