/* GET adventures page. */
exports.adventures = function(req, res) {
  res.render('index', { title: 'Adventures' });
};
