const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
