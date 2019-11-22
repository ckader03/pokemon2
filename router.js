// express comes with the ability to redirect a user based on URL,that's what this setup is
const router = require('express').Router();

// this route is for changing the database in any way
router.use('/api', require('./controllers/api'));
// this route is simply for bringing views to user
router.use('/pokemon', require('./controllers/pokemon'));

// handle a request to localhost: 8000
router.get('/',(req, res) => res.render('index'));

module.exports = router;