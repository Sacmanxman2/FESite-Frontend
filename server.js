const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const basicAuth = require('express-basic-auth');

let app = express();

app.use(basicAuth({
  users: { 'feadmin': 'Faithfu1Env0y!' },
  challenge: true,
  realm: 'Imb4T3st4pp',
}));
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Listening on port ' + port)
});

