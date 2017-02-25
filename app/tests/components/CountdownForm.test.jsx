const React = require('react'),
      ReactDOM = require('react-dom'),
      expect = require('expect'),
      $ = require('jquery'),
      TestUtils = require('react-addons-test-utils');
var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', function() {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown is valid seconds Enter', function() {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('shouldn\'t call onSetCountdown isn\'t valida data', function() {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = 'asd234';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
  it('shouldn\'t call onSetCountdown isn\'t data', function() {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
