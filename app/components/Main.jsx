var React = require('react');

var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <Navigation />
      <h1 className="page-title">Main Content</h1>
      <h3 className="page-title">React Boilerplate 2</h3>
      {props.children}
    </div>
  );
}

module.exports = Main;