const app = require('express')();
const cors = require('cors');
const db = require('./models');
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const baseRoutes = require('./routes');

app.use(cors({
  origin: "*"
}));
app.use(bodyParser.json());
app.use('/', baseRoutes);

app.listen(PORT, () => {
  console.log(`Listning on port ${PORT}`);
  db.sequelize.sync();
})