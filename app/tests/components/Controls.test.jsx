var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls')

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('randers pause when started', () => {
      var controls = TestUtils.renderIntoDocument(
        <Controls countdownStatus='started' />
      )
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');
      var $playButton = $el.find('button:contains(Play)');
      expect($pauseButton.length).toBe(1);
      expect($playButton.length).toBe(0);
    })

    it('renders play when paused', () => {
      var controls = TestUtils.renderIntoDocument(
        <Controls countdownStatus='paused' />
      )
      var $el = $(ReactDOM.findDOMNode(controls))
      var $pauseButton = $el.find('button:contains(Pause)');
      var $playButton = $el.find('button:contains(Play)');
      expect($pauseButton.length).toBe(0)
      expect($playButton.length).toBe(1)
    })
  })
})