// Define the API endpoint and API key
const apiKey = 'YfjGhC4iGmKL15yAUQIjNe2Za9DdSehg';
const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search?';
const baseUrl2='http://dataservice.accuweather.com/currentconditions/v1/';

//navigator.geolocation.getCurrentPosition(showPosition)

document.getElementById('fetch-btn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;

    fetchWeatherData(city);
});

async function fetchWeatherData(city) {
    try {
        const url=`${baseUrl}apikey=${apiKey}&q=${city}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        if (data.length>0){
            document.getElementById('cityName').textContent = `Weather in ${city}`;
            document.getElementById('temperature').textContent='';
            document.getElementById('description').textContent='';
            fetchData(data[0].Key) //get the key for the city!
        }
        else 
            alert("Information Not Found");
    } catch (error) {
        console.error('Failed to fetch city data:', error);
    }
}

async function fetchData(cityKey){
    try {
        const url=`${baseUrl2}${cityKey}?apikey=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        // Display the data on the webpage
        document.getElementById('temperature').textContent = `Temperature: ${data[0].Temperature.Metric.Value}°C`;
        document.getElementById('description').textContent = `Description: ${data[0].WeatherText}`;
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
    }
}
