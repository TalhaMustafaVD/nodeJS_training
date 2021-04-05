const router = require('express').Router();
const filmsController = require('../controllers/films');
router.get('/', filmsController.getAllFilms);

module.exports = router;