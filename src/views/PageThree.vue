<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>Pizza</ion-title>
      <ion-buttons slot="end">
        <ion-icon :icon="briefcase"></ion-icon>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <div class="container-pizza">
      <ion-img class="food-img" src="../dist/assets/promos/pizza.jpg"></ion-img>
    </div>

    <div class="pizza-info">
      <h4><b>Cheesy Pizza</b></h4>
      <ion-icon :icon="heart" class="icon-heart"></ion-icon>
    </div>

    <small>
      Enjoy our freshly baked pepperoni pizza with a crispy crust, topped with rich tomato sauce, 
      melted mozzarella cheese, and premium pepperoni slices. Perfect for any occasion, our pizza 
      is made with the finest ingredients and baked to perfection.
    </small>

    <!-- Price and Quantity Selector -->
    <div class="price-quantity-container">
      <div class="container-price">
        <h1>₱500</h1>
      </div>
      <div class="quantity-selector">
        <ion-button @click="decrementQuantity" color="light" class="quantity-button">-</ion-button>
        <span class="quantity-display">{{ quantity }}</span>
        <ion-button @click="incrementQuantity" color="light"class="quantity-button">+</ion-button>
      </div>
    </div>

    <div class="container-beverages">
      <h5><b>Beverages</b></h5>
      <ion-item>
        <ion-select v-model="selectedOption">
          <ion-select-option value="Coke">Coke</ion-select-option>
          <ion-select-option value="Sprite">Sprite</ion-select-option>
          <ion-select-option value="Royal">Royal</ion-select-option>
        </ion-select>
      </ion-item>
      <p>Selected: {{ selectedOption }}</p>
    </div>

    <div class="container-sizes">
      <ion-button class="light-gray-button">Regular</ion-button>
      <ion-button class="light-gray-button">Large</ion-button>
      <ion-button class="light-gray-button">XL</ion-button>
    </div>

    <h5><b>Add-Ons</b></h5>
    <div class="container-addons">
      <ion-card v-for="(addon, index) in addons" :key="index">
        <ion-item>
          <ion-checkbox 
            :checked="selectedCheckboxes.includes(index)"
            @ionChange="toggleCheckbox(index)"
            aria-label="Custom checkbox">
          </ion-checkbox>
          <ion-img :src="addon.image" class="addon-img"></ion-img> <!-- Add Image -->
          <ion-label>{{ addon.label }}</ion-label>
        </ion-item>
      </ion-card>
    </div>

    <!-- Navigation using ion-nav-link -->
    <ion-nav-link :component="CheckoutPage" router-direction="forward">
      <ion-button expand="block" color="danger" @click="openModal">Add to Bag</ion-button>
    </ion-nav-link>

    <!-- Modal definition -->
    <ion-modal :is-open="isModalOpen" @didDismiss="dismissModal">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="end">
            <ion-button color="light" @click="dismissModal">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-img class="food-img" src="../dist/assets/promos/check.png"></ion-img>
        <h3><b>Successfully Added!</b></h3>
        <h5>What to do now?</h5>
        <!-- Ensure modal dismisses and then navigates -->
        <ion-button 
          color="danger" 
          @click="proceedToCheckout"
        >Proceed to checkout</ion-button>
        <small>Add more?</small>
      </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonButton, IonModal, IonIcon, IonCard, IonItem, IonSelect, IonSelectOption, IonCheckbox, IonLabel, IonImg, IonNavLink } from '@ionic/vue';
import { briefcase, heart } from 'ionicons/icons';
import CheckoutPage from './Foodsummary.vue'; // Import the component for the checkout page

export default defineComponent({
  components: { 
    IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonButton, IonModal, IonIcon, IonCard, IonItem, IonSelect, IonSelectOption, IonCheckbox, IonLabel, IonImg, IonNavLink 
  },
  setup() {
    const router = useRouter();
    const isModalOpen = ref(false);
    const hasModalBeenShown = ref(false); // Flag to track modal display

    const openModal = () => {
      if (!hasModalBeenShown.value) {
        isModalOpen.value = true;
        hasModalBeenShown.value = true; // Set the flag to true after showing the modal
      }
    };

    const dismissModal = () => {
      isModalOpen.value = false;
    };

    const proceedToCheckout = () => {
      dismissModal(); 
      
    };

    const quantity = ref(1);
    const selectedOption = ref('');
    const selectedCheckboxes = ref<number[]>([]);
    const addons = ref([
      { label: '', image: '../dist/assets/promos/normal-coffee.jfif' },
      { label: ' ', image: '../dist/assets/promos/pasta.jpg' },
      { label: ' ', image: '../dist/assets/promos/french-fries.jpg' }
    ]);

    const incrementQuantity = () => {
      quantity.value++;
    };

    const decrementQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--;
      }
    };

    const toggleCheckbox = (index: number) => {
      const currentIndex = selectedCheckboxes.value.indexOf(index);
      if (currentIndex === -1) {
        selectedCheckboxes.value.push(index);
      } else {
        selectedCheckboxes.value.splice(currentIndex, 1);
      }
    };

    const handleAddToBag = () => {
      openModal();
    };

    return {
      briefcase,
      heart,
      quantity,
      selectedOption,
      selectedCheckboxes,
      addons,
      openModal,
      dismissModal,
      isModalOpen,
      incrementQuantity,
      decrementQuantity,
      toggleCheckbox,
      proceedToCheckout,
      CheckoutPage,
      handleAddToBag
    };
  }
});
</script>





<style scoped>
ion-icon {
  margin-right: 20px; /* Adjust the margin as needed */
}

.container-pizza {
  display: flex;
  justify-content: center; 
  align-items: center; 
  border: 0.5px solid grey; 
  border-radius: 15px; 
  padding: 10px; 
}

.pizza-info {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin-top: 10px;
}

.icon-heart {
  color: red;
}

.container-price {
  color: red;
}

small {
  color: grey;
}

.food-img {
  border-radius: 10px; 
  width: 90%;
  height: auto; 
}

.price-quantity-container {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin-top: 20px; 
}

.quantity-selector {
  display: flex;
  align-items: center;
  margin-left: auto; 
}

.quantity-button {
  --padding-start: 5px; 
  --padding-end: 5px; 
  --color: white; 
  padding: 0 5px;
}

.quantity-display {
  font-size: 1.2em; 
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .price-quantity-container {
    flex-direction: row; 
    align-items: center; 
  }

  .container-price {
    margin-bottom: 0; 
  }

  .quantity-selector {
    margin-left: auto; 
  }
}

.container-addons {
  display: flex;
  flex-direction: column; 
  gap: 10px; 
  margin-top: 20px; 
}

.container-beverages {
  display: flex;
  flex-direction: column; 
  gap: 10px; 
  margin-top: 20px; 
}

.light-gray-button {
  --background: lightgray; 
  --color: black; 
  padding: 10px 20px; 
  font-size: 16px; 
  width: 100%; 
}

/* Responsive adjustments */
@media (min-width: 600px) {
  .container-beverages {
    flex-direction: row; 
    flex-wrap: wrap; 
    gap: 10px; 
  }

  .light-gray-button {
    flex: 1; 
    max-width: 120px; 
  }
}
ion-modal {
    --height: 50%;
    --border-radius: 16px;
    --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  ion-modal::part(backdrop) {
    background: rgba(209, 213, 219);
    opacity: 1;
  }

  ion-modal ion-toolbar {
    --background: red; 
    --color: white;
  }
  .addon-img {
  width: 100px;
  height: 100px;
  margin-left: 10px;
}



/* Modal Styles */
ion-modal {
    --height: 50%;
    --border-radius: 16px;
    --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

ion-modal::part(backdrop) {
    background: rgba(209, 213, 219);
    opacity: 1;
}

ion-modal ion-toolbar {
    --background: red; 
    --color: white;
}

/* Center image, text, and buttons inside the modal */
ion-modal ion-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; 
    padding: 20px;
}

ion-modal .food-img {
    width: 150px; 
    height: 150px;
    object-fit: cover; 
    margin-top: 20px; 
    margin-bottom: 20px; 
    margin: auto;
}

ion-modal h3 {
    margin-top: 10px;
    font-size: 1.5em;
}

ion-modal h5 {
    margin-top: 5px;
    font-size: 1.2em;
}

/* Center buttons and add spacing */
ion-modal ion-button {
    margin-top: 15px;
    width: 80%; 
}
ion-modal small {
    display: block;
    margin-top: 10px; 
    text-align: center; 
    color: rgb(255, 0, 0); 
    font-size: 0.9em;
}
</style>
