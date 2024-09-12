<template>
  <ion-app>
    <!-- Include the Nav_sidebar component -->
    <Nav_sidebar />

    <!-- Main content area -->
    <ion-content id="main-content">
      <ion-header>
        <ion-toolbar>
          <!-- Button to open the sidebar -->
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title slot="end">
            <small>Hello, Cardo!</small>
          </ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding">
        <!-- Background image container -->
        <div class="bg-container">
          <div class="bg-image" :style="{ backgroundImage: 'url(' + currentImage + ')' }"></div>
          <!-- Coffee description -->
          <div class="coffee-description">
            <h3>Discover the Perfect Coffee</h3>
            <p>From rich espresso to frothy cappuccino, indulge in the finest flavors that bring you joy with every sip. Try our new seasonal blends and elevate your coffee experience!</p>
          </div>
        </div>
        <h1>What do you want to Drink?</h1>
                  <div class="container-search">
                <ion-searchbar animated="true" placeholder="Search" ></ion-searchbar>
                  </div> 
        <div class="special-offers-container">
          <h1>Special Offers!</h1>
          <span class="view-all"><h5>View all</h5></span>
        </div>
        <div class="sliding-cards-container">
          <!-- Sliding cards for special offers -->
          <ion-card class="sliding-card">
            <ion-card-header>
              <ion-img src="../dist/assets/promos/coffee_bread.jpg"></ion-img>
            </ion-card-header>
          </ion-card>

          <ion-card class="sliding-card">
            <ion-card-header>
              <ion-img src="../dist/assets/promos/coffee_cookies.jpg"></ion-img>
            </ion-card-header>
          </ion-card>

          <ion-card class="sliding-card">
            <ion-card-header>
              <ion-img src="../dist/assets/promos/coffee_crosini.jpg"></ion-img>
            </ion-card-header>
          </ion-card>

          <ion-card class="sliding-card">
            <ion-card-header>
              <ion-img src="../dist/assets/promos/coffee_pasta.jpg"></ion-img>
            </ion-card-header>
          </ion-card>
        </div>

        <div class="container-category">
          <h1>Category</h1>
          <div class="sliding-cards-container">
            <!-- Sliding cards for category -->
            <ion-card class="sliding-card-category">
                <ion-card-header>
                  <ion-img src="../dist/assets/promos/fries_burger.jpg"></ion-img>
                  <div class="card-overlay">
                    <h1>Fries & Burger</h1>
                  </div>
                </ion-card-header>
              </ion-card>

              <ion-card class="sliding-card-category">
                <ion-card-header>
                  <ion-img src="../dist/assets/promos/cakes.jpg"></ion-img>
                  <div class="card-overlay">
                    <h1>Delicious Cakes</h1>
                  </div>
                </ion-card-header>
              </ion-card>

              <ion-card class="sliding-card-category">
                <ion-card-header>
                  <ion-img src="../dist/assets/promos/shake.jfif"></ion-img>
                  <div class="card-overlay">
                    <h1>Refreshing Shakes</h1>
                  </div>
                </ion-card-header>
              </ion-card>

              <ion-card class="sliding-card-category">
                <ion-card-header>
                  <ion-img src="../dist/assets/promos/pasta.jpg"></ion-img>
                  <div class="card-overlay">
                    <h1>Hearty Pasta</h1>
                  </div>
                </ion-card-header>
              </ion-card>
          </div>
        </div>

        <div class="container-whatnew">
            <h1> What's New?</h1>
            <ion-img src="../dist/assets/promos/pizza.jpg" class="rounded-border"></ion-img>
        </div>
        <h1>Most Popular</h1>
        <div class="container-most-popular">
            
            <ion-card  class="card-grid">
              <ion-card-header>
                <ion-card-title><b>₱250</b></ion-card-title>
                <ion-card-subtitle>Spaghetti</ion-card-subtitle>
              </ion-card-header>
              <ion-img src="../dist/assets/promos/bestpasta.jpg" class="best-image"></ion-img>
             
            </ion-card>

            <ion-card class="card-grid">
              <ion-card-header>
                <ion-card-title><b>₱450</b></ion-card-title>
                <ion-card-subtitle>Cheese Burger</ion-card-subtitle>
              </ion-card-header>
              <ion-img src="../dist/assets/promos/best-burger.jpg" class="best-image"></ion-img>
              
            </ion-card>

            <ion-card class="card-grid">
              <ion-card-header>
                <ion-card-title><b>₱500</b></ion-card-title>
                <ion-card-subtitle>Spinach Pizza</ion-card-subtitle>
              </ion-card-header>
              <ion-img src="../dist/assets/promos/best-pizza.jpg" class="best-image"></ion-img>
             
            </ion-card>

            <ion-card class="card-grid">
              <ion-card-header>
                <ion-card-title><b>₱350</b></ion-card-title>
                <ion-card-subtitle>Green Original Burger</ion-card-subtitle>
              </ion-card-header>
              <ion-img src="../dist/assets/promos/best-second-burger.jpg" class="best-image"></ion-img>
             
            </ion-card>
          </div>


           <ion-nav-link router-direction="forward" :component="ourFoodsComponent" class="order-now-button">
              <ion-button color="danger">Order Now</ion-button>
            </ion-nav-link>
      </ion-content>
    </ion-content>
  </ion-app>
</template>

<script lang="ts">
import { markRaw, ref, onMounted } from 'vue';
import { IonCard, IonApp, IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton, IonMenuButton } from '@ionic/vue';
import Ourfoods from './Ourfoods.vue';
import Nav_sidebar from './Nav_sidebar.vue'; // Import Nav_sidebar component
import { trophy } from 'ionicons/icons';

export default {
  components: { 
    IonApp,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonNavLink,
    IonButton,
    IonMenuButton,
    Nav_sidebar,
    IonCard
  },
  setup() {
    const images = [
      '../dist/assets/images/bg.jpg',
      '../dist/assets/images/Coffeegrain.jpg',
      '../dist/assets/images/manycoffee.jpg'
    ];
    
    const currentImage = ref(images[0]);

    const changeImage = () => {
      const currentIndex = images.indexOf(currentImage.value);
      const nextIndex = (currentIndex + 1) % images.length;
      currentImage.value = images[nextIndex];
    };

    onMounted(() => {
      setInterval(changeImage, 3000); // Change image every 3 seconds
    });

    return {
      ourFoodsComponent: markRaw(Ourfoods),
      trophy,
      currentImage
    };
  },
};
</script>

<style scoped>
.special-offers-container {
  position: relative; /* Establishes a positioning context for child elements */
}

.special-offers-container h1 {
  margin: 0; /* Remove default margin */
}

.view-all {
  position: absolute;
  top: -10px;
  right: 0;
  font-size: 1em; /* Adjust font size as needed */
  color: red;
}

.ion-title {
  justify-content: end;
}

.bg-container {
  position: relative;
  width: 100%;
  height: 50%; /* Adjust height as needed */
 
}

.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
}

.coffee-description {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  color: white; 
  text-align: center;
  padding: 20px; 
  background-color: rgba(0, 0, 0, 0.5); 
  border-radius: 10px;
  width: 100%; 
  box-sizing: border-box; 
  height: 100%;
  font-family: 'Tangerine', serif;
  font-size: 20px;
}

.coffee-description h3 {
  margin-top: 10%;
  font-size: 2.5em;
}

.coffee-description p {
  font-size: 1.5em;
}

.sliding-cards-container {
  display: flex;

  width: 100%;
  position: relative;
  gap: 10px; 
}

.sliding-card{
  flex-shrink: 0;
  width: 100%; 
  height: 300px; 
  margin: 10px;
  animation: slide-left 12s infinite; 
  box-sizing: border-box; 
}
.sliding-card-category {
  flex-shrink: 0;
  width: 50%; 
  height: 300px; 
  margin: 1px;
  position: relative; 
  animation: slide-left 20s infinite; 
  box-sizing: border-box; 
}

.sliding-card-category ion-card-header {
  position: relative; 
  height: 100%;
}

.sliding-card-category ion-img {
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}

.card-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  z-index: 1; 
  color: #fff; 
  text-align: center;
  padding: 10px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1); 
  border-radius: 5px; 
}

.card-overlay h1 {
  margin: 0; 
  font-size: 1.2em; 
 font-weight: thin;
  position: absolute;
  top: 87%;
  left:15%;
}

.sliding-card ion-card-header,
.sliding-card ion-card-content
 {
  height: 100%; 
}

.sliding-card ion-img
{
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}

@keyframes slide-left {
  0% {
    transform: translateX(100%);
  }
  25% {
    transform: translateX(0);
  }
  33% {
    transform: translateX(0);
  }
  58% {
    transform: translateX(-100%);
  }
  66% {
    transform: translateX(-100%);
  }
  91% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(-300%);
  }
}
.rounded-border {
  border: 2px solid grey; 
  border-radius: 10px; 
 
}


.container-most-popular {
  display: flex; 
  flex-direction: row; 
  overflow-x: auto; 
  white-space: nowrap; 
  padding: 5px; 
  gap: 5px; 
  
}

.card-grid {
  width: 30%; 
  height: 300px; 
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .container-most-popular {
    flex-direction: column; 
    align-items: center; 
  }

  .card-grid {
    width: 100%; 
    margin-bottom: 10px; 
  }
}
.order-now-button {
  position: fixed; 
  bottom: 20px; 
  right: 30px; 
  z-index: 1000; 
}


.best-image{
  height:70%;
  
}
.container-search{
  width:60%;
  margin: 0 auto;
  
}
.bg-image{
  object-fit: cover; 
}
</style>
