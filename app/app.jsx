var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory}  = require("react-router")
var Main = require("Main");
var Weather = require("Weather");
var About = require("About");
var Examples = require("Examples");

//Load Foundation
require("style!css!foundation-sites/dist/foundation.min.css")
$(document).foundation();

//Load app css
require("style!css!sass!applicationStyles")


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
           <Route path="about" component={About}></Route>
           <Route path="examples" component={Examples}></Route>
            <IndexRoute component={Weather}></IndexRoute>
        </Route>
    </Router>,
    document.getElementById("app")
);
