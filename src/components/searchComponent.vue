<template>
    <div class="input-group mb-3">
      <input type="text" v-model="city" placeholder="Enter city name" class="form-control" />
      <button @click="search" class="btn btn-primary">Rechercher</button>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'searchComponent',
    data() {
      return {
        city: ''
      };
    },
    methods: {
      search() {
        this.$emit('search', this.city);
      }
    }
  });
  </script>
  