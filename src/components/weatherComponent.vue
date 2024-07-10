<template>
    <div class="card mt-5">
        <div class="card-body">
            <h2 class="card-title">Météo actuelle</h2>
            <SearchComponent @search="fetchWeather" /> 
            <div v-if="weatherData">
                <p>{{ weatherData.location.name }}, {{ weatherData.location.country }}</p>
                <p>Température: {{ weatherData.current.temperature }}°C</p>
                <p>Météo: {{ weatherData.current.weather_descriptions[0] }}</p>
                <img :src="weatherData.current.weather_icons[0]" alt="Weather icon" v-if="weatherData.current.weather_icons.length">
                <p><a :href="weatherData.request.url" target="_blank">plus de détails</a></p>
            </div>
            <div v-else>
                <p v-if="error" class="text-danger">{{ error }}</p>
                <p v-else>chargement...</p>
            </div>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { fetchWeather } from '@/services/weatherService';
  import SearchComponent from '@/components/searchComponent.vue';
  import { WeatherData } from '@/models/weatherData';
  
  export default defineComponent({
    name: 'weatherComponent',
    components: {
      SearchComponent
    },
    data() {
      return {
        weatherData: null as WeatherData | null,
        error: null as string | null
      };
    },
    methods: {
      async fetchWeather(city: string) {
        try {
          this.error = null;
          const data = await fetchWeather(city);
          this.weatherData = data;
        } catch (error) {
          this.error = "Nous n'avons pas pu récupérer les données";
          console.error("Nous n'avons pas pu récupérer les données:", error);
        }
      }
    }
  });
  </script>
  