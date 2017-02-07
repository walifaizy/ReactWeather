var React = require("react");
var ReactDOM = require("react-dom");

var GreeterMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message = this.props.message;
        return ( < div >
            < h1 > Hello {
                name
            } < /h1> < p > {
                message
            } < /p> < /div>
        );
    }
}); // GreeterMessage Component

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var name = this.refs.name.value;
        if (name.length > 0) {
            this.refs.name.value = "";
            this.props.onNewName(name);
        }
    },
    render: function () {
        return ( < form onSubmit = {
                this.onFormSubmit
            } >
            < input type = "text"
            ref = "name"
            placeholder = "Enter name" / >
            < textarea > < /textarea> < button > Set Name < /button> < /form>
        );
    }
}); //GreeterForm Component

var Greeters = React.createClass({
    getDefaultProps: function () {
        return {
            name: "React",
            message: "This is Default Message"
        };
    },

    getInitialState: function () {
        return {
            name: this.props.name
        }
    },

    handleNewName: function (name) {
        this.setState({
            name: name
        });

    },

    render: function () {
        var name = this.state.name;
        var message = this.props.message;
        return ( < div >
            < GreeterMessage name = {
                name
            }
            message = {
                message
            } > < /GreeterMessage> < GreeterForm onNewName = {
                this.handleNewName
            } > < /GreeterForm> < /div>
        )
    }
});

var firstName = "Wali"
ReactDOM.render( < Greeters name = {
        firstName
    }
    message = "This is my message" > < /Greeters>,
    document.getElementById("app")
);