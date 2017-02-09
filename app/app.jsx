var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory} = require('react-router');

var Main = require('Main');
var Timer = require('Timer')
var Countdown = require('Countdown')

// load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
require('style!css!sass!applicationStyles')

$(document).foundation();

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main} >
      <IndexRoute component={Timer} />
      <Route path="/countdown" component={Countdown} />
    </Route>
  </Router>,
  document.getElementById('app')
);