const router = require('express').Router();
const api = require('./api');

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/api', api);

module.exports = router;