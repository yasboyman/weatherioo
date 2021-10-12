import React, {useState,useEffect} from 'react'
import axios from "axios";
import CurrentWeather from "../CurrentWeatherContainer/CurrentWeather";
import styles from './SixteenForecast.module.css'
import Spinner from "../Utilities/Spinner";


const SixteenForecast = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [filterMinTemp,setMinFilter] = useState('all')
    const [filterMaxTemp,setMaxFilter] = useState('all')


    console.log('MIN', filterMinTemp)
    console.log('MAX', typeof filterMaxTemp  )

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

     const filterTemperature = data => {

        if (filterMinTemp === 'all') return data;
        if ( parseFloat(filterMinTemp) <= parseFloat(data.min_temp)) return data;

         if (filterMaxTemp === 'all') return data;
         if ( parseFloat(data.max_temp)   >= parseFloat(filterMaxTemp) )  return data;
    }

    return(
        <div className={styles.sixteenContainer}>
            {loading ? <Spinner /> :
                <>
                    <div>
                        <label>


                        <input
                            placeholder={'Search Min Temperature'}
                            value={filterMinTemp || 'all'}
                            onChange={(e) => setMinFilter(e.target.value)}
                            type={'number'}

                        />
                            {/*<button onSubmit={ () => setMinFilter('all')}>Clear</button>*/}
                        </label>

                        <input
                            placeholder={'Search Max Temperature'}
                            value={filterMaxTemp || 'all'}
                            onChange={(e) => setMaxFilter(e.target.value)}
                            type={'number'}
                        />

                    </div>
                <div  className={styles.sixTeenDay}>

                    {data && data
                        .filter(filterTemperature)
                        .map( i => {
                            console.log( typeof  i.max_temp)
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
                </>
            }
        </div>
    )

}

export default SixteenForecast