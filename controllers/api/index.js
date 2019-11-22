const router = require('express').Router();

const controller = require('./controller');

// whenever someone POSTS to localhost:8000/api/pokemon, we are using this controller method
router.post('/pokemon', controller.create);
// localhost:8000
router.put('/pokemon/:id', controller.update);
// same URL as above, but the method started in fetch (put vs delete)
// decides which controller method to use
router.delete('/pokemon/:id', controller.delete);

module.exports = router;