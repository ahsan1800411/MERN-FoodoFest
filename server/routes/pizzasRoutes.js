const router = require('express').Router();
const { getAllPizzas } = require('../controllers/pizzasControllers');

router.route('/getallpizzas').get(getAllPizzas);

module.exports = router;
