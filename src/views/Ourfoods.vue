<template>
  <ion-header>
   <ion-toolbar>
     <ion-buttons slot="start">
       <ion-back-button></ion-back-button>
     </ion-buttons>
     <ion-title>Our Foods</ion-title>
     <ion-icon :src="briefcase" slot="end"></ion-icon>
   </ion-toolbar>
 </ion-header>

 <ion-content class="ion-padding">
   <div class="container-search">
     <ion-searchbar animated="true" placeholder="Search"></ion-searchbar>
   </div>

   <div class="container-filter"> 
     <ion-button class="light-gray-button selected">All</ion-button>
     <ion-button class="light-gray-button">Coffee</ion-button>
     <ion-button class="light-gray-button">Chicken</ion-button>
     <ion-button class="light-gray-button">Burgers</ion-button>
     <ion-button class="light-gray-button">Pasta</ion-button>
     <ion-button class="light-gray-button">Pizza</ion-button>
   </div>
   
   <div class="food-container">
    <ion-nav-link router-direction="forward" :component="component" class="food-card-link">
        <ion-card class="food-card">
          <ion-card-header>
            <ion-card-title>Pizza</ion-card-title>
            
          </ion-card-header>
          <ion-card-subtitle>₱500</ion-card-subtitle>
            <span><small>2 reviews</small></span>
          <ion-img class="food-img" src="../dist/assets/promos/pizza.jpg"></ion-img>
        </ion-card>
      </ion-nav-link>
     

     <ion-card class="food-card">
       <ion-card-header>
         <ion-card-title>Burger & Fries</ion-card-title>
        
       </ion-card-header>
       <ion-card-subtitle>₱550</ion-card-subtitle><span><small>5 reviews</small></span>
       <ion-img class="food-img" src="../dist/assets/promos/fries_burger.jpg"></ion-img>
     </ion-card>

     <ion-card class="food-card">
       <ion-card-header>
         <ion-card-title>Matcha Cake</ion-card-title>
         
       </ion-card-header>
       <ion-card-subtitle>₱200</ion-card-subtitle><span><small>7 reviews</small></span>
       <ion-img class="food-img" src="../dist/assets/promos/cakes.jpg"></ion-img>
     </ion-card>

     <ion-card class="food-card">
       <ion-card-header>
         <ion-card-title>Shake</ion-card-title>
         
       </ion-card-header>
       <ion-card-subtitle>₱150</ion-card-subtitle><span><small>10 reviews</small></span>
       <ion-img class="food-img" src="../dist/assets/promos/shake.jfif"></ion-img>
     </ion-card>

     <ion-card class="food-card">
       <ion-card-header>
         <ion-card-title>Pasta Carbonara</ion-card-title>
      
       </ion-card-header>
       <ion-card-subtitle>₱350</ion-card-subtitle><span><small>15 reviews</small></span>
       <ion-img class="food-img" src="../dist/assets/promos/pasta.jpg"></ion-img>
     </ion-card>

     <ion-card class="food-card">
       <ion-card-header>
         <ion-card-title>Spaghetti</ion-card-title>
         
       </ion-card-header>
       <ion-card-subtitle>₱250</ion-card-subtitle><span><small>1 reviews</small></span>
       <ion-img class="food-img" src="../dist/assets/promos/bestpasta.jpg"></ion-img>
     </ion-card>

     <ion-card class="food-card">
       <ion-card-header>
         <ion-card-title>Cheese Burger</ion-card-title>
         
       </ion-card-header>
       <ion-card-subtitle>₱450</ion-card-subtitle><span><small>2 reviews</small></span>
       <ion-img class="food-img" src="../dist/assets/promos/best-burger.jpg"></ion-img>
     </ion-card>

     <ion-card class="food-card">
       <ion-card-header>
         <ion-card-title>Spinach Pizza</ion-card-title>
        
       </ion-card-header>
       <ion-card-subtitle>₱500</ion-card-subtitle><span><small>3 reviews</small></span>
       <ion-img class="food-img" src="../dist/assets/promos/best-pizza.jpg"></ion-img>
     </ion-card>

     <ion-card class="food-card">
       <ion-card-header>
         <ion-card-title>Green Original Burger</ion-card-title>
         
       </ion-card-header>
       <ion-card-subtitle>₱350</ion-card-subtitle><span><small>4 reviews</small></span>
       <ion-img class="food-img" src="../dist/assets/promos/best-second-burger.jpg"></ion-img>
     </ion-card>
   </div>
 </ion-content>



   
</template>

<script lang="ts">
import { briefcase } from 'ionicons/icons'; // Correct import
 import { markRaw } from 'vue';
 import {
   IonHeader,
   IonTitle,
   IonToolbar,
   IonContent,
   IonNavLink,
   IonButton,
   IonButtons,
   IonBackButton,
 } from '@ionic/vue';
 import PageThree from './PageThree.vue';

 export default {
   components: {
     IonHeader,
     IonTitle,
     IonToolbar,
     IonContent,
     IonNavLink,
     IonButton,
     IonButtons,
     IonBackButton,
   },
   data() {
     return {
       component: markRaw(PageThree),
       briefcase
     };
   },
 };
</script>
<style scoped>
.container-search {
 width: 60%;
 margin: 0 auto; /* Center search bar */
}


.selected {
 --background: #d32f2f; /* Red background for the selected button */
 --color: white; /* White text for contrast */
}

.container-filter {
 display: flex;
 justify-content: flex-start;
 flex-wrap: nowrap; /* Prevents wrapping to the next line */
 gap: 5px; /* Adds space between buttons */
 overflow-x: auto; /* Enables horizontal scrolling for overflow */

 
}

ion-button {
 width: 20%;
 --background: #d3d3d3; 
 --background-activated: #c0c0c0; 
 --color: black; 
 flex-shrink: 0; 
 white-space: nowrap; 
}
.food-container {
 text-align: center; /* Center align food cards */
}

.food-card {
 display: inline-block; /* Inline-block for food cards */
 width: calc(33.33% - 10px); /* 3 food cards per row with spacing */
 margin: 5px; /* Add some spacing between the cards */
 vertical-align: top; /* Align cards vertically at the top */
}

@media (max-width: 768px) {
 .food-card {
   width: calc(50% - 10px); 
 }
}

@media (max-width: 480px) {
 .food-card {
   width: calc(100% - 10px); 
 }
}
ion-icon {
 margin-right: 20px; /* Adjust the margin as needed */
}
.food-img {
 height: 200px; 
 object-fit: cover; 
}
.food-card {
  cursor: pointer; /* Show pointer cursor on hover */
}
</style>
