const express = require('express');
const apiRoutes = require('./routes/apiroutes.js');
const htmlRoutes = require('./routes/htmlroutes.js');

const PORT = process.env.port || 3001;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
