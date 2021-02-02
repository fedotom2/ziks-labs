'use strict';

const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const api = require('./api.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', api);

const start = async () => {
  try {

    const PORT = config.get('PORT') || 8000;
    app.listen(PORT, () => console.log(`Listening on port ${ PORT }`));

  } catch (err) {
    console.error(err);
    process.exit(1);
    return;
  }
};

start();
