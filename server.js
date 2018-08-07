const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const basicAuth = require('express-basic-auth');
const history = require('connect-history-api-fallback');

let app = express();

var hist = history({
  rewrites: [
    { from: /\*/, to: '/index.html' }
  ]
});

app.use(basicAuth({
  users: { 'feadmin': 'Faithfu1Env0y!' },
  challenge: true,
  realm: 'Imb4T3st4pp',
}));
app.use(hist);
app.use(serveStatic(__dirname + '/dist'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Listening on port ' + port)
});
