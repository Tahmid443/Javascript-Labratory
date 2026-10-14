// Uses Open-Meteo (no API key needed)
const cityInput = document.getElementById("city");
const goBtn = document.getElementById("go");
const result = document.getElementById("result");

async function getWeather(city) {
    result.innerHTML = "Loading...";
    try {
        // 1. Geocoding
        const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
        );
        const geo = await geoRes.json();
        if (!geo.results || !geo.results.length) throw new Error("City not found");
        const { latitude, longitude, name, country } = geo.results[0];

        // 2. Forecast
        const wRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`
        );
        const w = await wRes.json();
        const cur = w.current;

        result.innerHTML = `
      <div class="card">
        <h2>${name}, ${country}</h2>
        <p>Temperature: <strong>${cur.temperature_2m}°C</strong></p>
        <p>Wind: ${cur.wind_speed_10m} km/h</p>
      </div>`;
    } catch (e) {
        result.innerHTML = `<p style="color:red">${e.message}</p>`;
    }
}

goBtn.addEventListener("click", () => getWeather(cityInput.value.trim()));
cityInput.addEventListener("keydown", e => {
    if (e.key === "Enter") goBtn.click();
});
getWeather("London");