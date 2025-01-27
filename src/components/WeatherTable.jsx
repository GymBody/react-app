import React from "react";

const WeatherTable = ({ weatherData }) => {
  // Extract unique dates and times dynamically
  const groupedData = weatherData.reduce((acc, entry) => {
    const [date, time] = entry.date.split(", ");
    if (!acc[date]) acc[date] = {};
    acc[date][time] = entry; // Group data by date and time
    return acc;
  }, {});

  const allTimes = Array.from(
    new Set(weatherData.map((entry) => entry.date.split(", ")[1])) // Get all unique times
  );

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Date</th>
          {allTimes.map((time, index) => (
            <th key={index}>{time}</th> // Dynamically create columns
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.entries(groupedData).map(([date, times]) => (
          <tr key={date}>
            <td>{date}</td>
            {allTimes.map((time, index) => (
              <td key={index}>
                {times[time] ? (
                  <>
                    Temp: {times[time].temperature}°C <br />
                    Feels: {times[time].feelsLike}°C <br />
                    Hum: {times[time].humidity}%
                  </>
                ) : (
                  "N/A" // Handle missing data for some times
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeatherTable;
