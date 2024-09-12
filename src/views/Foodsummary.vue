<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button defaultHref="/" />
      </ion-buttons>
      <ion-title>Order Summary</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <!-- Address Section -->
    <div class="address-section">
      <div class="address-card">
        <div class="address-info">
          <h5><b>Cardo Dalisay</b></h5>
          <p>+63 945 6789</p>
          <p>Cardo@email.com</p>
        </div>
      </div>
    </div>
    <br>
    <div class="container-address">
      <div class="address-card-container">
        <div class="address-card" :class="{ 'selected-address': selectedAddress === 'home' }" @click="selectAddress('home')">
          <div class="address-info">
            <h5><b>My Home Address</b></h5>
            <p>No. 56 Agusan Street, Brgy. Del Monte<br>Biringan City 1234 Philippines</p>
          </div>
          <ion-radio :checked="selectedAddress === 'home'" slot="end"></ion-radio>
        </div>
            <div class="accordion-wrapper">
              <ion-accordion-group class="accordion-group">
                <ion-accordion value="first">
                  <ion-item slot="header" color="transparent" lines="none">
                    <ion-icon 
                      name="chevron-down-outline" 
                      class="accordion-icon" 
                      @click="toggleAccordion">
                    </ion-icon>
                  </ion-item>
                  <div class="ion-padding" slot="content">
                    <ion-button class="edit-button">edit</ion-button>
                    <ion-button class="delete-button">delete</ion-button>
                  </div>
                </ion-accordion>
              </ion-accordion-group>
            </div>
      </div>

      <div class="address-card" :class="{ 'selected-address': selectedAddress === 'work' }" @click="selectAddress('work')">
        <div class="address-info">
          <h5><b>Work/Office</b></h5>
          <p>3rd flr Anyeong Bldg. Seareal Baldemor<br>City 3456 Philippines</p>
        </div>
        <ion-radio :checked="selectedAddress === 'work'" slot="end"></ion-radio>
      </div>
      
      
    </div>
    

    <!-- Order Section -->
    <h5><b>Orders</b></h5>
    <div class="order-card">
      <ion-img class="order-img" src="../dist/assets/promos/pizza.jpg"></ion-img>
      <div class="order-details">
        <h5><b>Pizza</b></h5>
        <p>1x Tomato Sauce<br>1x Cheddar cheese<br>1x Pepperoni</p>
        <div class="price-quantity">
          <h4 class="price">₱500</h4>
          <div class="quantity-control">
            <ion-button @click="decrementQuantity" class="quantity-button">-</ion-button>
            <span>{{ quantity }}</span>
            <ion-button @click="incrementQuantity" class="quantity-button">+</ion-button>
          </div>
        </div>
      </div>
    </div>

    <!-- Payment Option Section -->
    <h5><b>Payment Option</b></h5>
    <div class="payment-section">
      <div class="payment-option" :class="{ 'selected-option': selectedPaymentOption === 'cod' }" @click="togglePaymentOption('cod')">
        <ion-icon name="cash-outline" class="payment-icon"></ion-icon>
        <div class="payment-info">
          <h5><b>Cash on Delivery</b></h5>
          <p>Pay when you receive the order</p>
        </div>
        <ion-radio :checked="selectedPaymentOption === 'cod'" slot="end"></ion-radio>
      </div>

      <div class="payment-option" :class="{ 'selected-option': selectedPaymentOption === 'loyalty' }" @click="togglePaymentOption('loyalty')">
        <ion-icon name="gift-outline" class="payment-icon"></ion-icon>
        <div class="payment-info">
          <h5><b>Loyalty Points</b></h5>
          <p class="red-text">(0 points)</p>
        </div>
        <ion-radio :checked="selectedPaymentOption === 'loyalty'" slot="end"></ion-radio>
      </div>

      <div class="payment-option" :class="{ 'selected-option': selectedPaymentOption === 'paypal' }" @click="togglePaymentOption('paypal')">
        <ion-icon src="https://example.com/paypal-icon.png" class="payment-icon"></ion-icon>
        <div class="payment-info">
          <h5><b>PayPal</b></h5>
          <p>A new tab will open to access your account</p>
        </div>
        <ion-radio :checked="selectedPaymentOption === 'paypal'" slot="end"></ion-radio>
      </div>

      <div class="payment-option" :class="{ 'selected-option': selectedPaymentOption === 'payanamics' }" @click="togglePaymentOption('payanamics')">
        <ion-icon src="https://example.com/payanamics-icon.png" class="payment-icon"></ion-icon>
        <div class="payment-info">
          <h5><b>Payanamics</b></h5>
          <p>Choose Payanamics services available for you</p>
        </div>
        <ion-radio :checked="selectedPaymentOption === 'payanamics'" slot="end"></ion-radio>
      </div>
    </div>

    <!-- Subtotal, Delivery Charge, Change Input, and Total -->
    <div class="summary-section">
      <div class="summary-row">
        <span>Subtotal</span>
        <span>₱500</span>
      </div>
      <div class="summary-row">
        <span>Delivery Charge</span>
        <span>₱59</span>
      </div>
      <ion-input placeholder="Change for e.g. 1,000" class="change-input"></ion-input>
      <div class="summary-total">
        <span><b>Grand Total</b></span>
        <span><b>₱559</b></span>
      </div>
    </div>

    <!-- Place Order Button -->
    <ion-nav-link router-direction="forward" :component="PlaceOrderComponent">
      <ion-button expand="block" class="place-order-button">Place Order</ion-button>
    </ion-nav-link>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent, markRaw } from 'vue';
import { IonAccordionGroup, IonAccordion, IonItem, IonLabel } from '@ionic/vue';
import PlaceOrder from './Placeorder.vue'; // Adjust the import path as needed

export default defineComponent({
  data() {
    return {
      PlaceOrderComponent: markRaw(PlaceOrder),
      quantity: 1,
      selectedPaymentOption: null as string | null,
      selectedAddress: null as string | null, // Add this property for address selection
    };
  },
  components: {
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
  },
  methods: {
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    togglePaymentOption(option: string) {
      this.selectedPaymentOption = this.selectedPaymentOption === option ? null : option;
    },
    selectAddress(address: string) { // Add this method for address selection
      this.selectedAddress = this.selectedAddress === address ? null : address;
    },
    toggleAccordion(event: Event) {
      const accordionItem = (event.target as HTMLElement).clqosest('ion-accordion');
      if (accordionItem) {
        accordionItem.toggle();
      }
    },
  },
});
</script>

<style scoped>
/* Styling for User Info Section */
.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.user-details {
  flex: 1;
}

.user-name {
  font-size: 20px;
  font-weight: bold;
}

.user-actions {
  display: flex;
  gap: 10px;
}

.action-icon {
  font-size: 24px;
  color: #f53d3d;
}

/* Styling for Address Section */
.container-address {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.address-card-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.address-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-right: 10px; /* Space between address card and accordion */
  flex: 1;
}

.selected-address {
  background-color: rgb(247, 147, 147);
}

.address-info {
  flex: 1;
}

.accordion-wrapper {
  flex-shrink: 0; /* Prevent accordion wrapper from shrinking */
}

/* Styling for Order Section */
.order-card {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
}

.order-img {
  width: 70px;
  height: 70px;
  border-radius: 8px;
  margin-right: 15px;
}

.order-details {
  flex: 1;
}

.price-quantity {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  color: #f53d3d;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity-control .quantity-button {
  --background: lightgray;
}

/* Payment Section */
.payment-section {
  margin-bottom: 20px;
}

.payment-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}

.selected-option {
  background-color: rgb(247, 147, 147);
}

.payment-info {
  flex: 1;
}

.payment-icon {
  font-size: 24px;
  margin-right: 10px;
}

.red-text {
  color: red;
}

/* Summary Section */
.summary-section {
  margin-bottom: 20px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.change-input {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 10px;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
}

/* Accordion Icon Styling */
.accordion-icon {
  font-size: 0px;
  cursor: pointer;
}

/* button */
.edit-button {
  --background: #faed75; /* Custom color for edit button */
}

.delete-button {
  --background: #f5606f; /* Custom color for delete button */
}

.place-order-button {
  --background: #f53d3d; /* Custom color for place order button */
}

</style>
