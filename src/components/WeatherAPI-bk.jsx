import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherTable from './WeatherTable';

const WeatherAPI = () => {
  const [weatherData, setWeather] = useState(null);
  const [error, setError] = useState(null);
  // console.log(lat + " : " + lon + " : " + appid)
  useEffect(() => {
    const fetchWeather = async (latitude, longitude) => {
      try {
        const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;//"YOUR_API_KEY"; // Replace with your API key

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast`,
          {
            params: {
              lat: latitude,
              lon: longitude,
              // units: "metric", // Use 'imperial' for Fahrenheit
              appid: API_KEY,
            },
          }
        );
        setWeather(response.data);
      } catch (err) {
        setError("Failed to fetch weather data");
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          (err) => setError("Unable to retrieve location")
        );
      } else {
        setError("Geolocation is not supported by your browser");
      }
    };

    getLocation();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!weatherData) return <div>Loading...</div>;


  // Safeguard for undefined or incomplete weather data
  const { city, list } = weatherData || {};
  if (!city || !list) return <div>Weather data is unavailable.</div>;


  // Preprocess the weather data
  const preprocessWeatherData = (list) => {
    return list.map((forecast) => ({
      date: new Date(forecast.dt * 1000).toLocaleString(),
      temperature: forecast.main.temp,
      feelsLike: forecast.main.feels_like,
      humidity: forecast.main.humidity,
    }));
  };
  return (
    <div>
      <h1>Weather Forecast for {city.name}, {city.country}</h1>
      <p>Population: {city.population}</p>
      <p>Sunrise: {new Date(city.sunrise * 1000).toLocaleTimeString()} | Sunset: {new Date(city.sunset * 1000).toLocaleTimeString()}</p>

      {/* Pass processed data to WeatherTable */}
      <WeatherTable weatherData={preprocessWeatherData} />
    </div>

  );
};

export default WeatherAPI;
