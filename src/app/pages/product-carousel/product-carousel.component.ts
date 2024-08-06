import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.css'
})
export class ProductCarouselComponent  implements OnInit{

  products = [
    { name: 'Produit 1', description: 'Description du produit 1', image: '/assets/logo1.jpg' },
    { name: 'Produit 2', description: 'Description du produit 2', image: '/assets/logo1.jpg' },
    { name: 'Produit 3', description: 'Description du produit 3', image: '/assets/logo1.jpg' },
    { name: 'Produit 3', description: 'Description du produit 3', image: '/assets/logo1.jpg' },
    { name: 'Produit 3', description: 'Description du produit 3', image: '/assets/logo1.jpg' },
    { name: 'Produit 3', description: 'Description du produit 3', image: '/assets/logo1.jpg' },
    { name: 'Produit 3', description: 'Description du produit 3', image: '/assets/logo1.jpg' },
    { name: 'Produit 3', description: 'Description du produit 3', image: '/assets/logo1.jpg' },


  ];
  currentSlide = 0;

  constructor() { }

  ngOnInit(): void {
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.products.length;
    this.updateSlidePosition();
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.products.length) % this.products.length;
    this.updateSlidePosition();
  }

  updateSlidePosition(): void {
    const container = document.getElementById('carousel-container') as HTMLElement;
    container.style.transform = `translateX(-${this.currentSlide * 100}%)`;
  }

  addToCart(product: any): void {
    console.log(`${product.name} ajouté au panier!`);
    // Ajoutez ici la logique pour ajouter le produit au panier
  }
}
