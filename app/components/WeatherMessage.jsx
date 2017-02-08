var React = require("react");

//var WeatherMessage = React.createClass({
//    render: function() {
//        var {temp, location} = this.props;
//        return (
//            <h2>It's it {temp} in {location}</h2>
//        );
//    }
//});

var WeatherMessage = (props) => {
    var{temp,location} = props;
    return (
         <h2 className="text-center">It's it {temp} in {location}</h2>
    );
}
module.exports = WeatherMessage;