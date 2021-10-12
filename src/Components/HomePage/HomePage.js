import axios from "axios";
import {useEffect, useState} from "react";
import CurrentWeather from "../CurrentWeatherContainer/CurrentWeather";


const HomePage = () => {

    /* Hooks state fetching initial data */
    const [loading, setLoading] = useState(true)
    // const [location, setLocation] = useState('')
    const [data, setData] = useState([])


    /* latitudes and longtitudes */
    const key = process.env.REACT_APP_GOOGLE_API_KEY
    const london = {lat: 51.500152, long: -0.126236}
    const newYork = {lat: 40.71324, long: -74.006223}
    const mumbai = {lat: 19.075983, long: 72.877655}
    const sydney = {lat: -33.868820, long: 151.209290}
    const tokyo = {lat: 35.689487, long: 139.691711}

    // const setLocation1 = async () =>  await


//const fetchData =  () => location && axios.get(`https:api.weatherbit.io/v2.0/current?lat=35.689487&lon=139.691711&key=${key}&include=minutely`)

    useEffect(() => {

        const testingAPI = async () => {
            try {
                const response = await axios.get(`https:api.weatherbit.io/v2.0/current?lat=35.689487&lon=139.691711&key=${key}&include=minutely`)
                setData(response.data.data)

            } catch (error) {
                console.log(error);
            }
        }
        testingAPI()
        setLoading(false)

    }, [])

    console.log('data::', data)
    return (
        <div className="App">
            <header className="App-header">

                {loading === true ? '...loading' :
                    <>
                        {data && data.map(i => {
                            console.log('inside', i)
                            return (<CurrentWeather
                                description={i.weather.description}
                                icon={i.weather.icon}
                                temp={i.temp}
                                city={i.city_name}
                            />)
                        })
                        }
                    </>
                }
            </header>
        </div>
    );
}

export default HomePage;
