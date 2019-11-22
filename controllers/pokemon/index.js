// this file is to decide to do when someone reaches  localhost:8000/pokemon
const router = require("express").Router();
const controller = require("./controller");

// router.get('extention after localhost:8000/pokemon',
// the_controller_method_that_matches)
// localhost:8000/pokemon
router.get("/", controller.index);
// localhost:8000/pokemon/new
router.get('/new', controller.new);

// localhost:8000/pokemon/:id/update
router.get('/:id/update', controller.update);
// localhost:8000/pokemon/:id or localhost:8000/pokemon/1
router.get('/:id', controller.show);

// the order that place your routes in is called RESTFUL routing
// any URLs that include a variable such as :id should be placed
// towards thee bottom of this page. This is beacause we don't want
// other extebsions (such as /new) to be misinpreted as an URL variable
// in case where you have an extension AFTER variable (such as '/:id/update), it should be placed above the URL that end
// at the variable 
module.exports = router;
