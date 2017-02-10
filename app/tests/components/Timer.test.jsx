var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')
var expect = require('expect')
var $ = require('jQuery')

var Timer = require('Timer')

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist()
  })

  it('increment count by 1 every second when started', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer interval={100}/>)
    timer.handleStatusChange('started');
    setTimeout(function() {
      expect(timer.state.count).toBe(2);
      expect(timer.state.status).toBe('started');
      done()
    }, 210);
  })  

  it('does not increment count when paused', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer interval={100}/>)
    timer.handleStatusChange('started');
    setTimeout(function() {
      expect(timer.state.count).toBe(2);
      expect(timer.state.status).toBe('started');
      timer.handleStatusChange('paused');

      setTimeout(function() {
        expect(timer.state.count).toBe(2);
        expect(timer.state.status).toBe('paused');
        done()
      }, 110);
    }, 210);
  })

  it('clears the count when stopped', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer interval={100}/>)
    timer.handleStatusChange('started');
    setTimeout(function() {
      expect(timer.state.count).toBe(1);
      timer.handleStatusChange('stopped');

      setTimeout(function() {
        expect(timer.state.count).toBe(0);
        expect(timer.state.status).toBe('stopped');
        done()
      }, 110);
    }, 110);
  })


})