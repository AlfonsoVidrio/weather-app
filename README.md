# Weather App

A web application to check the current weather for any city using the OpenWeatherMap API, built with React and TypeScript.

<img width="1920" height="911" alt="screencapture" src="https://github.com/user-attachments/assets/d4789126-0c0f-4b56-afc2-06c48fae9461" />

## Features

- **Search by city and country**: Select a country and enter a city name to get the weather.
- **Weather information**: Displays current temperature, min/max temperatures, weather description, and a representative icon.
- **Kelvin to Celsius conversion**: Temperatures are converted and displayed in Celsius.
- **Zod validation**: API responses are validated at runtime using Zod schemas.
- **Dark/Light theme**: Toggle between dark and light mode, persisted in localStorage.
- **Loading state**: Animated spinner while fetching data.
- **Error handling**: Alerts when a city is not found or form fields are missing.

## Technologies

- React 19
- TypeScript
- CSS Modules
- Vite
- Axios
- Zod
- Lucide React

## Environment Variables

Create a `.env.local` file in the root directory and add your OpenWeatherMap API key:

```env
VITE_API_KEY=your_api_key_here
```

You can get a free API key at [https://openweathermap.org/api](https://openweathermap.org/api).

## Installation

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run the linter |
