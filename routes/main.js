var controller = require('../app_server/controllers/main');

module.exports = function(app) {
	app.get('/', controller.index);
};
