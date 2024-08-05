
// Fetch current weather data
async function fetchWeatherData(city) {
    const apiKey = 'your_api_key';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    return data;
}

// Display weather data on the web page
function displayWeather(data) {
    // Implement the logic to display weather data
}
