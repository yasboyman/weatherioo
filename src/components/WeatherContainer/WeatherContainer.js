import React, {useEffect, useState} from "react";
import styles from './WeatherContainer.module.css'
import axios from "axios";
import CurrentWeatherCard from "./WeatherCard/CurrentWeatherCard";
import PropTypes from 'prop-types';





const WeatherContainer = ({description,icon, temp, city, min_temp, max_temp, day, sixteenOn, sunset, sunrise})=> {
    const [image,setImage] = useState()

    useEffect(() => {

        const getImage = async () => {
            try {
                const response = await axios.get(`https://www.weatherbit.io/static/img/icons/${icon}.png`)
                setImage(response.request.responseURL)

            } catch (error) {
                console.log(error);
            }
        }
        getImage()
    },[])


    return(

        <div className={styles.container}>
            <CurrentWeatherCard
            description={description}
            image={image && image}
            temp={temp}
            city={city}
            day={day}
            max_temp={max_temp}
            min_temp={min_temp}
            sixteenOn={sixteenOn}
            sunrise={sunrise}
            sunset={sunset}

            />

        </div>
    )
}


WeatherContainer.propTypes = {
    description: PropTypes.string,
    icon: PropTypes.string,
    temp: PropTypes.number,
    min_temp: PropTypes.number,
    max_temp: PropTypes.number,
    sixteenOn: PropTypes.bool

};


export default WeatherContainer



