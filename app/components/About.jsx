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
        <h4>About Component</h4>
        <p>Welcome to the about page</p>
        </div>
    );
};
module.exports = About;