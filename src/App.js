import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./Components/HomePage/HomePage";
import SixteenForecast from "./Components/SixteenForecast/SixteenForecast";
import './App.css'
import NavigationItem from "./Components/NavigationItem/NavigationItem";
import rain from "./assets/rain.mp4";


const App = () => {

    return (
        <div className="App">
            {/*<h3> Weather App </h3>*/}

            <NavigationItem exact link={'/'}>
                <button className={'myButton'}>Tokyo</button>
            </NavigationItem>
            <NavigationItem exact link={'/16DayForecast'}>
                <button className={'myButton'} >16 Day Forecast</button>
                <video loop={true} autoPlay={true} muted={true}>
                    <source src={rain} type={'video/mp4'}/>
                </video>
            </NavigationItem>
            <main>
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/16DayForecast" component={SixteenForecast}/>
                </Switch>
            </main>
        </div>
    );
}

export default App;
