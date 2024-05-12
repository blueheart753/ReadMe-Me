'use client'
import { useState, useEffect } from 'react'
import { fetchWeather } from '../api/openweather'
import Image from 'next/image'

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
        console.error('Error fetching weather data:', error)
      }
    }

    fetchWeatherData()
  }, [])

  return (
    <div className="h-screen flex flex-col items-center justify-center mx-auto">
      <div className="flex flex-col flex-wrap p-2 gap-2 justify-center ">
        <p className="text-white line-clamp-2 text-3xl font-black text-center leading-relaxed sm:text-7xl">
          안녕하세요!
        </p>
        <p className="text-white line-clamp-2 text-3xl font-black text-center leading-relaxed sm:text-7xl">
          제 이름은
          <span className="whitespace-nowrap text-stroke text-8xl">김미남</span>
          입니다!
        </p>
      </div>
    </div>
  )
}

export default Profile
