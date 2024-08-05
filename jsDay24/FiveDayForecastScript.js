
// Fetch 5-day weather forecast data
async function fetchFiveDayForecast(city) {
    const apiKey = 'your_api_key';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    return data;
}

// Display 5-day forecast data on the web page
function displayFiveDayForecast(data) {
    // Implement the logic to display 5-day forecast data
}
