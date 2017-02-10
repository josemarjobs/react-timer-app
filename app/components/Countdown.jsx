var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

const STOPPED = 'stopped';
const STARTED = 'started';
const PAUSED = 'paused';

var Countdown = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: PAUSED
    }
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countdownStatus === prevState.countdownStatus) {
      return;
    }
    switch (this.state.countdownStatus) {
      case STARTED:
        this.startTimer();
        break;
    }
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      if (newCount < 0) {
        this.setState({
          count: 0,
          countdownStatus: PAUSED
        });
        clearInterval(this.timer);
        return;
      }
      this.setState({count: newCount});
    }, 1000);
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: STARTED
    });
  },
  render: function() {
    return (
      <div className="countdown">
        <Clock totalSeconds={this.state.count} />
        <Controls countdownStatus={this.state.countdownStatus} />
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )  
  }
})

module.exports = Countdown;