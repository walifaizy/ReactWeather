var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");

var Weather = React.createClass({
    getInitialState: function() {
        return {
           isLoading: false
        }
    },
     handleSearch: function(location){
        var that = this;
         
        this.setState({isLoading:true});
        openWeatherMap.getTemp(location).then(function(temp) {
        that.setState({
            location: location,
            temp: temp,
            isLoading: false
        });
        },function(errorMessage) {
            that.setState({isloading:false});
            alert(errorMessage);
        });
         /*this.setState({
            location: location,
            temp: 23
        });*/
    },
    render: function() {
        var {isLoading, temp,location} = this.state;
        
        function renderMessage() {
            if(isLoading) {
                return <img src="https://www.jeffdunham.com/wp-content/themes/jeff/images/loading.gif" width="150"/>
            } else if(temp && location) {
                return <WeatherMessage temp={temp} location={location}></WeatherMessage>;
            }
        }
        
        return(
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}></WeatherForm>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;


