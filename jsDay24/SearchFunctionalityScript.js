
// Implement search functionality
document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('searchInput').value;
    fetchWeatherData(city).then(data => displayWeather(data));
});
