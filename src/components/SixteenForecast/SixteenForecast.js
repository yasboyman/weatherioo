import {useState, useEffect} from 'react'
import axios from "axios";
import WeatherContainer from "../WeatherContainer/WeatherContainer";
import styles from './SixteenForecast.module.css'
import Spinner from "../Spinner/Spinner";


const SixteenForecast = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [minTemperatureInput, setMinTemperatureInput] = useState('')
    const [maxTemperatureInput, setMaxTemperatureInput] = useState('')

    const key = process.env.REACT_APP_GOOGLE_API_KEY



    useEffect(() => {

        setLoading(true)

        const testingAPI = async () => {
            try {
                const response = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=35.689487&lon=139.691711&key=${key}`)
                setData(response.data.data)
                setLoading(false)

            } catch (error) {
                setLoading(false)
                console.log(error);
            }
        }
        testingAPI()


    }, [])

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const getDay = (day) => {
        return new Date(day).getDay()
    }


    const filterMinTemperature = data => {
        const maxInputTemperature = parseFloat(maxTemperatureInput)
        const minInputTemperature = parseFloat(minTemperatureInput)
        const {maxTemperature} = data.max_temp
        const {minTemperature} = data.min_temp

         if (minTemperatureInput === '' && maxTemperatureInput === '') return true;

        if (minTemperatureInput !== '' && maxTemperatureInput !== '') {
            if (maxInputTemperature <= maxTemperature && minInputTemperature >= minTemperature) return true;

        } else if (minTemperatureInput !== '') {
            if (minInputTemperature >= minTemperature) {
                return true
            }
        } else if (maxTemperatureInput !== '') {
            if (maxInputTemperature <= maxTemperature) {
                return true
            }
        }
        return false
    }


    return (
        <div className={styles.sixteenContainer}>
            {loading ? <Spinner/> :
                <>
                    <div>
                        <label>
                            <input
                                placeholder='Search Min Temperature'
                                value={minTemperatureInput}
                                onChange={(e) => setMinTemperatureInput(e.target.value)}
                                type='number'
                                onKeyDown={e => /[\+\-\,]$/.test(e.key) && e.preventDefault()}

                            />
                        </label>
                        <input
                            placeholder='Search Max Temperature'
                            value={maxTemperatureInput}
                            onChange={(e) => setMaxTemperatureInput(e.target.value)}
                            type='number'
                            onKeyDown={e => /[\+\-\,]$/.test(e.key) && e.preventDefault()}

                        />
                    </div>
                    <div className={styles.sixTeenDay}>

                        {data && data
                            .filter(filterMinTemperature)
                            .map(i => (
                                 <WeatherContainer
                                    description={i.weather.description}
                                    icon={i.weather.icon}
                                    temp={i.temp}
                                    city={i.city_name}
                                    max_temp={i.max_temp}
                                    min_temp={i.min_temp}
                                    day={days[getDay(i.datetime)]}
                                    sixteenOn={true}
                                />
                            ))
                        }
                    </div>
                </>
            }
        </div>
    )

}


export default SixteenForecast