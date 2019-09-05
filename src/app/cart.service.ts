import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CartService {

  items = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
    return this.items;
  }

}