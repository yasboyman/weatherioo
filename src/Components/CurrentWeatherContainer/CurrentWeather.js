import React, {useEffect, useState} from "react";
import styles from './CurrentWeather.module.css'
import axios from "axios";
import CurrentWeatherCard from "./CurrentWeatherCard/CurrentWeatherCard";




const CurrentWeather = ({description,icon, temp, city, min_temp, max_temp, day, sixteenOn})=> {
    const [image,setImage] = useState()


    useEffect(() => {

        const getImage = async () => {
            try {
                const response = await axios.get(`https://www.weatherbit.io/static/img/icons/${icon}.png`)
                setImage(response.request.responseURL)
                console.log(response.request.responseURL)

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

            />

        </div>
    )
}
export default CurrentWeather