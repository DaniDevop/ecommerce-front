import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cartItems = [
    {
      product: { name: 'Ordinateur Portable', price: 999.99, image: 'assets/laptop.jpg' },
      quantity: 1
    },
    {
      product: { name: 'Téléphone', price: 699.99, image: 'assets/phone.jpg' },
      quantity: 2
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  removeFromCart(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  checkout(): void {
    alert('Passer à la caisse');
    // Ajoutez ici la logique pour passer à la caisse
  }
}