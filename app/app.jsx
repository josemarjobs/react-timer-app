var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory} = require('react-router');

var Main = require('Main');

// load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
require('style!css!sass!applicationStyles')

$(document).foundation();

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main} >
    </Route>
  </Router>,
  document.getElementById('app')
);