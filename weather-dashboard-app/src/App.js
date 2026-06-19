import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // instead of requesting data from an API, use this mock data
  const mockWeatherData = {
    "New York": {
      temperature: "22°C",
      humidity: "56%",
      windSpeed: "15 km/h",
    },
    "Los Angeles": {
      temperature: "27°C",
      humidity: "45%",
      windSpeed: "10 km/h",
    },
    London: {
      temperature: "15°C",
      humidity: "70%",
      windSpeed: "20 km/h",
    },
  };

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);

  // required variable names
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (searchCity) => {
    const selectedCity = searchCity || city;

    if (mockWeatherData[selectedCity]) {
      setWeather(mockWeatherData[selectedCity]);
      setError(false);

      // store previous searches uniquely
      if (!filteredData.includes(selectedCity)) {
        setFilteredData([...filteredData, selectedCity]);
      }
    } else {
      setWeather(null);
      setError(true);
    }
  };

  return (
    <div className="App">
      {/* Search Section */}
      <input
        type="text"
        id="citySearch"
        placeholder="Search for a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button id="searchButton" onClick={() => handleSearch()}>
        Search
      </button>

      {/* Weather Data */}
      <div id="weatherData">
        {weather && !error ? (
          <>
            <div>Temperature: {weather.temperature}</div>
            <div>Humidity: {weather.humidity}</div>
            <div>Wind Speed: {weather.windSpeed}</div>
          </>
        ) : error ? (
          <div>City not found.</div>
        ) : (
          <>
            <div>Temperature: </div>
            <div>Humidity: </div>
            <div>Wind Speed: </div>
          </>
        )}
      </div>

      {/* Previous Searches */}
      <div id="previousSearches">
        {filteredData.map((searchedCity) => (
          <button
            key={searchedCity}
            onClick={() => handleSearch(searchedCity)}
            style={{ margin: "5px" }}
          >
            {searchedCity}
          </button>
        ))}
      </div>
    </div>
  );
}
