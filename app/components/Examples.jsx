var React = require("react");

/*var Examples = React.createClass({
    render: function() {
        return (
            <h4>Exapmles Component</h4>
        );
    }
});*/
var Examples = (props) => {
    return (
        
        <div>
            <h3>Example Component!</h3>
            <p>Welcome to example page</p>
        </div>
    )
}
module.exports = Examples;