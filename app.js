const app = require('express')();
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const baseRoutes = require('./routes');

app.use(bodyParser.json());
app.use('/', baseRoutes);

app.listen(PORT, () => {
  console.log(`Listning on port ${PORT}`);
})