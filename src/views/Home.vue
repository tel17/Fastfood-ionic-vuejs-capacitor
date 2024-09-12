<template>
    <ion-nav :root="component"></ion-nav>
        <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
  </template>
  
  <script lang="ts">
    import { markRaw } from 'vue';
    import { IonNav } from '@ionic/vue';
    import Homepage from './Homepage.vue';
    
  
    export default {
      components: { IonNav },
      data() {
        return {
          component: markRaw(Homepage),
        };
      },
    };
  </script>
  

