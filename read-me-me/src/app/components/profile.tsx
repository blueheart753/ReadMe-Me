'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface WeatherRes {
  main: {
    temp: number
    humidity: number
  }
  weather: {
    description: string
  }[]
}

const fetchWeather = async (
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

const Profile = () => {
  const [weatherData, setWeatherData] = useState<{
    temperature: number
    humidity: number
    description: string
  } | null>(null)

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const city = 'Seoul'
        const apiKey = '329b6fdafb9a0bfcc3854da027c0b3c9'
        const data = await fetchWeather(city, apiKey)
        setWeatherData(data)
      } catch (error) {
        console.error('Error fetching weather data:')
      }
    }

    fetchWeatherData()
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div className="sm:w-screen flex flex-col flex-wrap p-2 gap-2">
        <p className="line-clamp-2 text-3xl font-black text-center leading-relaxed sm:text-7xl">
          안녕하세요!
        </p>
        <p className="line-clamp-2 text-3xl font-black text-center leading-relaxed sm:text-7xl">
          제 이름은 <span className="whitespace-nowrap">김미남</span> 입니다!
        </p>
      </div>
      <div>
        <div className="overflow-hidden w-46 m-auto">
          <Image
            src={'/Kimminam.png'}
            alt="내 사진"
            width={180}
            height={100}
            className="m-auto"
          />
        </div>
        <div className="p-6">
          <p className="font-semibold text-center">
            세상에 대한 호기심으로 어려움을 찾고 <br />
            문제를 해결을 위해 나아가는 개발자
          </p>
          {weatherData?.description}
        </div>
      </div>
    </div>
  )
}

export default Profile
