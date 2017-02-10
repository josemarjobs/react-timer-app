var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

const STOPPED = 'stopped';
const STARTED = 'started';
const PAUSED = 'paused';

var Countdown = React.createClass({
  getDefaultProps: function () {
    return {interval: 1000}
  },
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: STOPPED
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
      case STOPPED:
        this.setState({count: 0})
      case PAUSED:
        clearInterval(this.timer);
        this.timer = null;
        break;
    }
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = null;
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      if (newCount < 0) {
        this.setState({
          count: 0,
          countdownStatus: STOPPED
        });
        clearInterval(this.timer);
        return;
      }
      this.setState({count: newCount});
    }, this.props.interval);
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: STARTED
    });
  },
  handleStatusChange: function(newStatus) {
    this.setState({countdownStatus: newStatus})
  },
  render: function() {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if(countdownStatus !== STOPPED) {
        return <Controls 
          countdownStatus={countdownStatus} 
          onStatusChange={this.handleStatusChange}/>
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    }
    return (
      <div className="countdown">
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    )  
  }
})

module.exports = Countdown;