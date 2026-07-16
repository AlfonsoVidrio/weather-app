import { useState, useEffect } from "react"
import styles from "./App.module.css"
import { Alert } from "./components/Alert/Alert"
import { Form } from "./components/Form/Form"
import { Spinner } from "./components/Spinner/Spinner"
import { WeatherDetail } from "./components/WeatherDetail/WeatherDetail"
import { useWeather } from "./hooks/useWeather"

const getInitialTheme = (): boolean => {
  const saved = localStorage.getItem("theme")
  if (saved) return saved === "dark"
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

export const App = () => {
  const [dark, setDark] = useState(getInitialTheme)
  const { weather, loading, notFound, hasWeatherData, fetchWeather } = useWeather()

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", dark)
    root.classList.toggle("light", !dark)
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  const toggleTheme = () => setDark(prev => !prev)

  return (
    <div className={styles.app}>
      <button
        className={styles.themeToggle}
        onClick={toggleTheme}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <span className={`${styles.thumb} ${dark ? styles.thumbDark : ""}`} />
      </button>

      <header className={styles.header}>
        <h1 className={styles.title}>weather</h1>
      </header>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />

        <div className={styles.resultContainer}>
          {loading && <Spinner />}
          {hasWeatherData && <WeatherDetail weather={weather} />}
          {notFound && <Alert>No city found</Alert>}
        </div>
      </div>
    </div>
  )
}
