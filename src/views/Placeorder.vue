<template>
  <ion-header>
    <ion-toolbar color="danger">
      <ion-buttons slot="start">
        <ion-back-button defaultHref="/" />
      </ion-buttons>
      <ion-title>Order Confirmation</ion-title>
    </ion-toolbar>
  </ion-header>
  
  <ion-content class="ion-padding">
    <div class="order-container">
      <ion-img class="food-img" src="../dist/assets/promos/check.png"></ion-img>
      <h1 class="order-title">Thank you for your order!</h1>
      <p class="order-description">
        Your order <span class="alt">No. 123456789</span> has been successfully received and is now being processed. Kindly wait for a notification regarding the status of your order.
      </p>
      <div class="button-group">
        <ion-nav-link router-direction="forward" :component="HomeComponent">
          <ion-button expand="block" color="danger">Go to Home</ion-button>
        </ion-nav-link>
        <ion-button expand="block" color="secondary">Track Order</ion-button>
      </div>
    </div>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent, markRaw } from 'vue';
import { IonHeader, IonTitle, IonToolbar, IonContent, IonButton, IonButtons, IonBackButton, IonNavLink } from '@ionic/vue';
import HomePage from './Homepage.vue'; // Adjust the import path as needed

export default defineComponent({
  components: { 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonContent, 
    IonButton, 
    IonButtons, 
    IonBackButton,
    IonNavLink
  },
  data() {
    return {
      HomeComponent: markRaw(HomePage) // Ensure component is correctly referenced
    };
  }
});
</script>

<style scoped>
.order-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
}

.food-img {
  width: 150px;
  height: auto;
  margin-bottom: 20px;
}

.order-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.order-description {
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: #555;
}

.alt {
  color: red;
  font-weight: bold;
}

.button-group {
  width: 100%;
  max-width: 400px;
  margin-top: 70px;

}

ion-button {
  margin-top: 10px;
}
</style>
