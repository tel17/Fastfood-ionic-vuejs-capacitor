<template>
  <ion-menu side="start" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title class="menu-title">Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="menu-content">
      <div class="profile-container">
        <ion-img src="../dist/assets/images/profile.jpg"></ion-img>
        <div class="profile-details">
          <h4>Cardo Dalisay</h4>
          <h5>+639123456782</h5>
          <span class="points">
            <ion-icon :src="trophy"></ion-icon>&nbsp;0 points
          </span>
        </div>
      </div>

      <ion-list class="menu-list">
        <ion-item>
          <ion-nav-link :component="homepageComponent" class="nav-link">
            <ion-icon :src="home" slot="start"></ion-icon>
            Home
          </ion-nav-link>
        </ion-item>

        <ion-item>
          <ion-nav-link :component="ourFoodsComponent" class="nav-link">
            <ion-icon :src="pizza" slot="start"></ion-icon>
            Order Now
          </ion-nav-link>
        </ion-item>

        <ion-item>
          <ion-nav-link :component="homepageComponent" class="nav-link">
            <ion-icon :src="notifications" slot="start"></ion-icon>
            Notification
          </ion-nav-link>
        </ion-item>

        <ion-item>
          <ion-nav-link :component="homepageComponent" class="nav-link">
            <ion-icon :src="business" slot="start"></ion-icon>
            Store Locator
          </ion-nav-link>
        </ion-item>

        <ion-item>
          <ion-nav-link :component="homepageComponent" class="nav-link">
            <ion-icon :src="information" slot="start"></ion-icon>
            FAQ's
          </ion-nav-link>
        </ion-item>

        <ion-item>
          <ion-nav-link :component="homepageComponent" class="nav-link">
            <ion-icon :src="basket" slot="start"></ion-icon>
            My Orders
          </ion-nav-link>
        </ion-item>

        <ion-item>
          <ion-nav-link :component="homepageComponent" class="nav-link">
            <ion-icon :src="person" slot="start"></ion-icon>
            My Account
          </ion-nav-link>
        </ion-item>

        <ion-item>
          <ion-nav-link :component="homepageComponent" class="nav-link">
            <ion-icon :src="heart" slot="start"></ion-icon>
            My Favorites
          </ion-nav-link>
        </ion-item>

        <ion-item>
          <ion-nav-link :component="homepageComponent" class="nav-link">
            <ion-icon :src="pin" slot="start"></ion-icon>
            Order Tracker
          </ion-nav-link>
        </ion-item>

        <ion-item>
          <ion-nav-link :component="homepageComponent" class="nav-link">
            <ion-icon :src="refresh" slot="start"></ion-icon>
            Order History
          </ion-nav-link>
        </ion-item>
      </ion-list>

      <ion-toolbar class="logout-toolbar">
        <ion-button expand="block" color="danger" @click="handleLogout" class="logout-button">
          Logout
        </ion-button>
      </ion-toolbar>
    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
import { markRaw } from 'vue';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonNavLink } from '@ionic/vue';
import Homepage from './Homepage.vue'; 
import Ourfoods from './Ourfoods.vue';
import { home, pizza, notifications, business, information, basket, person, heart, pin, refresh, trophy } from 'ionicons/icons'; 

export default {
  components: { 
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonNavLink
  },
  data() {
    return {
      homepageComponent: markRaw(Homepage),
      ourFoodsComponent: markRaw(Ourfoods),
      home,
      pizza, 
      notifications,
      business,
      information,
      basket,
      person,
      heart,
      pin,
      refresh,
      trophy
    };
  },
  methods: {
    handleLogout() {
      // Add logout functionality
    }
  }
};
</script>

<style scoped>
.menu-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.profile-container {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ddd;
}

.profile-container ion-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 16px;
}

.profile-details h4, .profile-details h5 {
  margin: 0;
  font-weight: 600;
}

.points {
  font-size: 0.9rem;
  color: gray;
  margin-top: 4px;
}

.menu-list ion-item {
  --inner-padding-start: 16px;
  --min-height: 48px;
}

.nav-link {
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
}

.nav-link ion-icon {
  margin-right: 10px;
}

.logout-toolbar {
  margin-top: auto;
  padding: 16px;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ddd;
}

.logout-button {
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
}

.logout-button:hover {
  cursor: pointer;
}
</style>
