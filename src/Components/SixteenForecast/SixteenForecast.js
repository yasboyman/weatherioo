import React, {useState,useEffect} from 'react'
import axios from "axios";
import CurrentWeather from "../CurrentWeatherContainer/CurrentWeather";
import styles from './SixteenForecast.module.css'


const SixteenForecast = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const key = process.env.REACT_APP_GOOGLE_API_KEY

    useEffect(() => {

        const testingAPI = async () =>  {
            try {
                const response =   await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=35.689487&lon=139.691711&key=${key}`)
                setData(response.data.data)

            } catch (error) {
                console.log(error);
            }
        }

        testingAPI()
        setLoading(false)

    },[])

    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    const getDay = (day) => {
        return new Date(day).getDay()
    }

    return(
        <div className={styles.sixteenContainer}>
            {loading === true ? '...loading' :
                <div  className={styles.sixTeenDay}>
                    {data && data.map( i => {
                        console.log('inside', i )
                        return (<CurrentWeather
                            description={i.weather.description}
                            icon={i.weather.icon}
                            temp={i.temp}
                            city={i.city_name}
                            max_temp={i.max_temp}
                            min_temp={i.min_temp}
                            day={days[getDay(i.datetime)]}
                            sixteenOn={true}
                        />)
                    })
                    }
                </div>
            }
        </div>
    )

}

export default SixteenForecast