<template>
  <div id="app" class="container">
    <WeatherComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WeatherComponent from '@/components/weatherComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    WeatherComponent
  }
});
</script>

<style>

</style>
