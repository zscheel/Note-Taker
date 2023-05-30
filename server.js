const express = require('express');

const app = express();

const PORT = 3001;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`);
  });