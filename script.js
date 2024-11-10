/* El codigo comentado pertece a una api que generaba el tiempo pero la he cambiado por un widget

// Aquí debes colocar tu propia clave de API obtenida de OpenWeatherMap
const apiKey = '16d5708937f51c0e7ebb39ac243b0588'; 
const city = 'Barcelona';  // Ciudad fija

// URL de la API de OpenWeatherMap
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

window.onload = function() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Actualizamos los elementos con los datos del clima
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            // Mostramos la información en la página
            document.getElementById('temperature').innerText = `Temperatura: ${temperature} °C`;
            document.getElementById('weather-description').innerText = `Estado: ${description}`;
            document.getElementById('humidity').innerText = `Humedad: ${humidity}%`;
            document.getElementById('wind-speed').innerText = `Velocidad del viento: ${windSpeed} m/s`;
        })
        .catch(error => {
            console.log("Error al obtener los datos del clima:", error);
        });
};


*/ 




// Hora actual en tiempo local

function mostrarHoraLocal() {
const fechaActual = new Date();
const hora = fechaActual.getHours();
const minutos = fechaActual.getMinutes();
const segundos = fechaActual.getSeconds();

document.getElementById("horaActual").textContent = `${hora}:${minutos}:${segundos}`;
}

// Actualizar la hora cada segundo
setInterval(mostrarHoraLocal, 1000);




// Widget del tiempo

!function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'weatherwidget-io-js');




// Alternar modo oscuro 

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
