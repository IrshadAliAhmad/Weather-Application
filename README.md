# 🌦️ Weather App

A simple, responsive weather application built with **HTML, CSS, and JavaScript** that shows real-time weather details using the **OpenWeatherMap API**.

## 🚀 Features
- Search weather by city name  
- Displays temperature, humidity, and wind speed  
- Dynamic weather icons  
- Fully responsive (mobile-friendly) UI  
- Lightweight and fast (served via NGINX in Docker)

## 🐳 Run with Docker
```bash
# Build the image
docker build -t weather-app .

# Run the container
docker run -d -p 8080:80 weather-app
