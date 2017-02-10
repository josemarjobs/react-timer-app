var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function() {
    return {count: 0}
  },
  handleSetCountdown: function(seconds) {
    this.setState({count: seconds});
  },
  render: function() {
    return (
      <div className="countdown">
        <Clock totalSeconds={this.state.count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )  
  }
})

module.exports = Countdown