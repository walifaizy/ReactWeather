var React = require("react");
var{Link} = require("react-router");

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
            <h1 className="text-centered">Example</h1>
            <p>Here are few examples to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Dubai">Dubai, U.A.E</Link>
                </li>
                <li>
                    <Link to="/?location=Delhi">Delhi</Link>
                </li>
            </ol>
        </div>
    )
}
module.exports = Examples;