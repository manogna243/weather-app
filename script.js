function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;
    
    if (cityName.trim() === '') {
      alert('Please enter a city name.');
      return;
    }
   
    
    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c9e1046ffcec4ce146258c77cf3bcbfa`;
    ;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        displayWeather(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again.');
      });
  }
  
  function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
  
    const weatherHtml = `
      <h2>${cityName}</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Description: ${description}</p>
    `;
  
    weatherInfo.innerHTML = weatherHtml;
  }