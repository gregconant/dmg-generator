var controller = require('../app_server/controllers/adventures');

module.exports = function(app) {
	app.get('/', controller.adventures);
};
