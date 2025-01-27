import { useState, useEffect } from "react";
import axios from "axios";
import LanguageSelector from "./LanguageSelector"; // Import the LanguageSelector component

const WeatherAPI = () => {
  const [weatherData, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // State to hold the selected language

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  useEffect(() => {
    const fetchWeather = async (latitude, longitude) => {
      try {
        const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // Replace with your API key

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast`,
          {
            params: {
              lat: latitude,
              lon: longitude,
              lang: selectedLanguage, // Pass the selected language
              units: "metric", // Use 'imperial' for Fahrenheit
              appid: API_KEY,
            },
          }
        );
        setWeather(response.data);
      } catch (err) {
        setError("Failed to fetch weather data:" + err);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          (err) => setError("Unable to retrieve location: " + err)
        );
      } else {
        setError("Geolocation is not supported by your browser");
      }
    };

    getLocation();
  }, [selectedLanguage]); // Re-fetch weather when the selected language changes

  if (error) return <div>Error: {error}</div>;
  if (!weatherData) return <div>Loading...</div>;

  // Safeguard for undefined or incomplete weather data
  const { city, list } = weatherData || {};
  if (!city || !list) return <div>Weather data is unavailable.</div>;

  return (
    <div>
      <LanguageSelector onLanguageChange={handleLanguageChange} /> {/* Add the LanguageSelector component */}
      <h1>Weather Forecast for {city.name}, {city.country}</h1>
      <p>Population: {city.population}</p>
      <p>Sunrise: {new Date(city.sunrise * 1000).toLocaleTimeString()} | Sunset: {new Date(city.sunset * 1000).toLocaleTimeString()}</p>

      {list.map((forecast, index) => (
        <div key={index}>
          <p>Date: {new Date(forecast.dt * 1000).toLocaleString()}</p>
          <p>Temperature: {forecast.main.temp}°C</p>
          <p>Feels Like: {forecast.main.feels_like}°C</p>
          {/* <p>Humidity: {forecast.main.humidity}%</p> */}
          <p> Description: {forecast.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherAPI;
