var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");
var ErrorModal = require("ErrorModal");

var Weather = React.createClass({
    getInitialState: function() {
        return {
           isLoading: false
        }
    },
     handleSearch: function(location){
        var that = this;
         
        this.setState({
            isLoading:true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });
         
        openWeatherMap.getTemp(location).then(function(temp) {
        that.setState({
            location: location,
            temp: temp,
            isLoading: false,
        });
        },function(e) {
            that.setState({
                isLoading:false,
                errorMessage: e.message
            });
        });
         /*this.setState({
            location: location,
            temp: 23
        });*/
    },
    componentDidMount: function() {
        var location = this.props.location.query.location;
        if(location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = "#/";
        }
    },
    componentWillReceiveProps: function(newprops) {
         var location = this.newprops.location.query.location;
        if(location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = "#/";
        }
    },
    render: function() {
        var {isLoading, temp, location ,errorMessage} = this.state;
        
        function renderMessage() {
            if(isLoading) {
                return <img className="text-center" src="https://www.jeffdunham.com/wp-content/themes/jeff/images/loading.gif" width="150"/>
            } else if(temp && location) {
                return <WeatherMessage temp={temp} location={location}></WeatherMessage>;
            }
        }
        
        function renderError() {
            if(typeof errorMessage == 'string') {
                return (<ErrorModal message={errorMessage}/>)
            }
        }
        
        return(
            <div>
                <h1 className="text-center page-title">GetWeather</h1>
                <WeatherForm onSearch={this.handleSearch}></WeatherForm>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;


