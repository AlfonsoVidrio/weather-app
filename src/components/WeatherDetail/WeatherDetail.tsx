import type { Weather } from "../../hooks/useWeather"
import { kelvinToCelsius } from "../../utils"
import { WeatherIcon } from "../../utils/weatherIcons"
import styles from "./WeatherDetail.module.css"

type WeatherDetailProps = {
    weather: Weather
}

export const WeatherDetail = ({ weather }: WeatherDetailProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.cityRow}>
                <WeatherIcon
                    code={weather.weather[0].icon}
                    size={32}
                    className={styles.icon}
                />
                <p className={styles.cityName}>{weather.name}</p>
            </div>
            <p className={styles.temperature}>{kelvinToCelsius(weather.main.temp)}&deg;C</p>
            <div className={styles.temperatures}>
                <p>
                    <span className={styles.tempLabel}>Min</span>
                    <span className={styles.tempValue}>{kelvinToCelsius(weather.main.temp_min)}&deg;</span>
                </p>
                <p>
                    <span className={styles.tempLabel}>Max</span>
                    <span className={styles.tempValue}>{kelvinToCelsius(weather.main.temp_max)}&deg;</span>
                </p>
            </div>
        </div>
    )
}
