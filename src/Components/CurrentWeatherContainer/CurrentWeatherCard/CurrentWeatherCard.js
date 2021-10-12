import React from 'react'
import styles from './WeatherCard.module.css'


const WeatherCard = ({description, image, temp, city, min_temp, max_temp, day, sixteenOn}) => {

    console.log('THIS IS DAY', day)
    return (


            <div className={sixteenOn ? styles.cardContainerColumn : styles.cardContainer}>
                <h2 className={styles.title}>{city ? city : day} </h2>

                <p>{description}</p>
                <img src={image} alt={'weather icon'} width={100} height={100}/>
                <h3>{temp}&deg;C</h3>
                <div className={styles.extraInfo}>
                    {min_temp ?
                        <>
                            <p>Max:{max_temp}&deg;C</p>
                            <p>Min:{min_temp}&deg;C</p>
                        </>
                        :
                        <> <p> Feels like: 23% </p>
                            <p>2021-10-11:13</p></>


                    }

                </div>

            </div>



    )

}

export default WeatherCard