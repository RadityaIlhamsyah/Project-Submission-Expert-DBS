import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import DATA from '../public/data/DATA.json';
import DrawerInitiator from './utils/drawer-initiator';
import { createRestaurantItemTemplate } from './views/templates/template-creator';

const app = {
  init() {
    this._initialData = DATA;
    this._initializeAppShell();
    this._displayRestaurants(this._initialData.restaurants);
  },

  _initializeAppShell() {
    DrawerInitiator.init({
      button: document.querySelector('#hamburgerButton'),
      drawer: document.querySelector('#navigationDrawer'),
      content: document.querySelector('#mainContent'),
    });
  },

  _displayRestaurants(restaurants) {
    const restaurantContainer = document.querySelector('#restaurantList');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

window.addEventListener('DOMContentLoaded', () => {
  app.init();
});
