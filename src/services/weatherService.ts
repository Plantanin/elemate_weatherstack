// src/services/weatherService.ts
import { WeatherData } from '@/models/weatherData';

const API_KEY = import.meta.env.VITE_WEATHERSTACK_API_KEY; //importation de la clé
const BASE_URL = 'http://api.weatherstack.com/current';

console.log('API Key:', API_KEY);

export async function fetchWeather(city: string): Promise<WeatherData> {
  const response = await fetch(`${BASE_URL}?access_key=${API_KEY}&query=${city}`); //fetch des données
  if (!response.ok) {
    throw new Error('Données météo indisponibles');
  }
  const data = await response.json();
  if (data.error) {
    throw new Error(data.error.info);
  }
  return data;
}
