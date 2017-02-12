const React = require('react'),
      ReactDOM = require('react-dom'),
      {Route, Router, IndexRoute, hashHistory} = require('react-router'),
      Main = require('Main'),
      Timer = require('Timer'),
      Countdown = require('Countdown');

//Load fundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!aplicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
