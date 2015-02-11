module.exports = function(app) {
	require('./adventures')(app); // load Adventures route
	require('./main')(app);// load Main route
};
