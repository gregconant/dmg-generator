/* GET adventures page. */
exports.adventures = function(req, res) {
  res.render('adventures', { header: 'Adventure Generator' });
};
