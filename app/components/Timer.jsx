var React = require('react')

var Clock = require('Clock')
var Controls = require('Controls')

const STOPPED = 'stopped';
const STARTED = 'started';
const PAUSED = 'paused';

var Timer = React.createClass({
  getDefaultProps: function () {
    return {interval: 1000}
  },
  getInitialState: function() {
    return {
      count: 0,
      status: STOPPED
    }
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.status === prevState.status) {
      return;
    }
    switch (this.state.status) {
      case STARTED:
        this.handleStart();
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
  handleStart: function() {
    this.timer = setInterval(() => {
      this.setState({count: this.state.count + 1});
    }, this.props.interval);
  },
  handleStatusChange: function(newStatus) {
    this.setState({status: newStatus})
  },
  render: function () {
    var {count, status} = this.state;
    return (
      <div className="timer">
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count} />
        <Controls 
          countdownStatus={status}
          onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
})

module.exports = Timer