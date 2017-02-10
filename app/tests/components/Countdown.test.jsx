var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  })

  describe('handleSetCountdown', () => {
    it('should set state to started and count down', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown interval={100}/>)
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
      setTimeout(() => {
        expect(countdown.state.count).toBe(9)
        done()
      }, 110);
    })

    it('should not set count to less the 0', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown  interval={100}/>);
      countdown.handleSetCountdown(1);
      setTimeout(function() {
        expect(countdown.state.count).toBe(0);
        done();
      }, 210);
    })

    it('pauses countdown on paused status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown  interval={100}/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      setTimeout(function() {
        expect(countdown.state.count).toBe(3)
        expect(countdown.state.countdownStatus).toBe('paused')
        done()
      }, 110);
    })

    it('pauses countdown on stopped status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown  interval={100}/>)
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');

      setTimeout(function() {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 110);
    })
  });
});