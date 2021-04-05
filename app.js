const app = require('express')();
const films = require('./routes/films');
const PORT = process.env.PORT || 4000;

app.use('/films', films);

app.listen(PORT, () => {
  console.log(`Listning on port ${PORT}`);
})