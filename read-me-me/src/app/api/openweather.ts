interface WeatherRes {
  main: {
    temp: number
    humidity: number
  }
  weather: {
    description: string
  }[]
}

export const fetchWeather = async (
  city: string,
  apiKey: string
): Promise<{
  temperature: number
  humidity: number
  description: string
}> => {
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  try {
    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error('Failed to fetch weather data')
    }

    const data: WeatherRes = await response.json()

    return {
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description,
    }
  } catch (error) {
    throw new Error('Failed to fetch weather data')
  }
}
