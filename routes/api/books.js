const router = require('express').Router();
const booksController = require('../../controllers/books');

router.get('/', booksController.getAllBooks);
router.get('/:id', booksController.getBookById);
router.delete('/:id', booksController.deleteBookById);
router.post('/', booksController.createBook);
router.put('/:id', booksController.updateBookById);

module.exports = router;