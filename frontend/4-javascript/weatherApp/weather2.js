const apiKey = 'd96c35d627414a9bd3fe9ea418b805de';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
// Define the API endpoint and API key

document.getElementById('fetch-btn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    fetchWeatherData(city);
});

async function fetchWeatherData(city) {
    try {
        const url = `${baseUrl}q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Display the data on the webpages
        document.getElementById('cityName').textContent = `Weather in ${city}`;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
    }
}
