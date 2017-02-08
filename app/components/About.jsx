var React = require("react");
//
//var About = React.createClass({
//    render: function() {
//        return (
//            <h4>About Component</h4>
//        );
//    }
//});
//module.exports = About;

var About = (props) => {
    return (
        <div>
        <h1 className="text-centered">About</h1>
        <p>This is a weather Application build in ReactJS and foundation.</p>
        <p>Here are some pf the tools i used</p>
            <ul>
                <li ><a href="http://facebook.github.io" target="_blank">React</a>-This was the javascript framework used</li>
            </ul>
            <ul>
                <li ><a href="http://openweathermap.org" target="_blank">OPen Weather Map</a>-Weather api</li>
            </ul>
        </div>
    );
};
module.exports = About;