import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Restaurant {
  name: string;
  imageUrl: string;
  discount: string;
  deliveryTime: string;
}

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent {
  restaurants: Restaurant[] = [
    { name: 'Restaurant 1', imageUrl: '/assets/food_delivery.jpg', discount: '20% off', deliveryTime: '60 min' },
    { name: 'Restaurant 2', imageUrl: '/assets/brooke-lark-C1fMH2Vej8A-unsplash.jpg', discount: '50% off upto ₹50', deliveryTime: '49 min' },
    { name: 'Restaurant 3', imageUrl: '/assets/brooke-lark--F_5g8EEHYE-unsplash.jpg', discount: '20% off', deliveryTime: '60 min' },
    { name: 'Restaurant 4', imageUrl: '/assets/brooke-lark-oaz0raysASk-unsplash.jpg', discount: '50% off upto ₹50', deliveryTime: '49 min' },
    { name: 'Restaurant 5', imageUrl: '/assets/casey-lee-awj7sRviVXo-unsplash.jpg', discount: '20% off', deliveryTime: '60 min' },
    { name: 'Restaurant 6', imageUrl: '/assets/cristina-matos-albers-S4dXp25NiLg-unsplash.jpg', discount: '50% off upto ₹50', deliveryTime: '49 min' },
    { name: 'Restaurant 7', imageUrl: '/assets/dani-rendina-zcJEvX2hX8M-unsplash.jpg', discount: '20% off', deliveryTime: '60 min' },
    { name: 'Restaurant 8', imageUrl: '/assets/gonzalo-mendiola-dzn37nOmki4-unsplash.jpg', discount: '20% off', deliveryTime: '60 min' },
    { name: 'Restaurant 9', imageUrl: '/assets/jannis-brandt-fvN2OHH1dqk-unsplash.jpg', discount: '50% off upto ₹50', deliveryTime: '49 min' },
    { name: 'Restaurant 10', imageUrl: '/assets/lefteris-kallergis-rbcvIrxw6KA-unsplash.jpg', discount: '20% off', deliveryTime: '60 min' },
    { name: 'Restaurant 11', imageUrl: '/assets/ryan-concepcion-50KffXbjIOg-unsplash.jpg', discount: '50% off upto ₹50', deliveryTime: '49 min' },
    { name: 'Restaurant 12', imageUrl: '/assets/spencer-davis-fGRcnIroOTI-unsplash.jpg', discount: '20% off', deliveryTime: '60 min' },
    { name: 'Restaurant 13', imageUrl: '/assets/spencer-davis-G7fvQ3_FcJE-unsplash.jpg', discount: '50% off upto ₹50', deliveryTime: '49 min' },
    { name: 'Restaurant 14', imageUrl: '/assets/food_delivery.jpg', discount: '20% off', deliveryTime: '60 min' },
    { name: 'Restaurant 15', imageUrl: '/assets/brooke-lark-C1fMH2Vej8A-unsplash.jpg', discount: '50% off upto ₹50', deliveryTime: '49 min' },
    { name: 'Restaurant 16', imageUrl: '/assets/brooke-lark--F_5g8EEHYE-unsplash.jpg', discount: '20% off', deliveryTime: '60 min' },
    { name: 'Restaurant 17', imageUrl: '/assets/brooke-lark-oaz0raysASk-unsplash.jpg', discount: '50% off upto ₹50', deliveryTime: '49 min' },
    { name: 'Restaurant 18', imageUrl: '/assets/casey-lee-awj7sRviVXo-unsplash.jpg', discount: '20% off', deliveryTime: '60 min' },
    { name: 'Restaurant 19', imageUrl: '/assets/cristina-matos-albers-S4dXp25NiLg-unsplash.jpg', discount: '50% off upto ₹50', deliveryTime: '49 min' },
    { name: 'Restaurant 20', imageUrl: '/assets/dani-rendina-zcJEvX2hX8M-unsplash.jpg', discount: '20% off', deliveryTime: '60 min' },
    { name: 'Restaurant 21', imageUrl: '/assets/gonzalo-mendiola-dzn37nOmki4-unsplash.jpg', discount: '20% off', deliveryTime: '60 min' },
    { name: 'Restaurant 22', imageUrl: '/assets/jannis-brandt-fvN2OHH1dqk-unsplash.jpg', discount: '50% off upto ₹50', deliveryTime: '49 min' },
    { name: 'Restaurant 23', imageUrl: '/assets/lefteris-kallergis-rbcvIrxw6KA-unsplash.jpg', discount: '20% off', deliveryTime: '60 min' },
    { name: 'Restaurant 24', imageUrl: '/assets/ryan-concepcion-50KffXbjIOg-unsplash.jpg', discount: '50% off upto ₹50', deliveryTime: '49 min' },
    { name: 'Restaurant 25', imageUrl: '/assets/spencer-davis-fGRcnIroOTI-unsplash.jpg', discount: '20% off', deliveryTime: '60 min' },
    { name: 'Restaurant 26', imageUrl: '/assets/spencer-davis-G7fvQ3_FcJE-unsplash.jpg', discount: '50% off upto ₹50', deliveryTime: '49 min' },




    // Add more restaurants as needed
  ];

  filteredRestaurants: Restaurant[] = [];

  restaurantName: string | undefined;
  welcomeMessage!: string;

  constructor(private route: ActivatedRoute) {
    // Initialize filteredRestaurants with all restaurants initially
    this.filteredRestaurants = [...this.restaurants];
  }

  ngOnInit(): void {
    const state = history.state;
    const username = state && state.username ? state.username : null;
    if (username) {
      this.welcomeMessage = `Welcome, ${username}!`;
    }
  }


  searchRestaurants(event: Event) {
    const searchQuery = (event.target as HTMLInputElement).value;
    if (!searchQuery) {
      // If search query is empty, display all restaurants
      this.filteredRestaurants = [...this.restaurants];
    } else {
      // If search query is provided, filter restaurants based on the query
      this.filteredRestaurants = this.restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

  }

}

