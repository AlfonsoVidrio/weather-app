export const kelvinToCelsius = (temperature: number) : number => {
    const kelvin = 273.15
    return Math.floor(temperature - kelvin)
}