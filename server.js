var express = require('express');

const PORT = process.env.PORT || 3000;
var app = express();

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    return res.redirect('http://' + req.hostname + req.url)
  } 
  next();
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});