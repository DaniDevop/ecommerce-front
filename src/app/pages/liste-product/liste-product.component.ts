import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-product.component.html',
  styleUrl: './liste-product.component.css'
})
export class ListeProductComponent {
  searchQuery: string = '';
  categories: string[] = ['Tous', 'Ordinateurs', 'Téléphones', 'Accessoires'];
  selectedCategory: string = 'Tous';
  products = [
    { name: 'Ordinateur Portable', description: 'Ordinateur portable puissant', price: 999.99, image: 'assets/laptop.jpg', category: 'Ordinateurs' },
    { name: 'Téléphone', description: 'Téléphone avec écran 4K', price: 699.99, image: 'assets/phone.jpg', category: 'Téléphones' },
    { name: 'Casque', description: 'Casque audio avec réduction de bruit', price: 199.99, image: 'assets/headphones.jpg', category: 'Accessoires' },
    { name: 'Clavier', description: 'Clavier mécanique', price: 129.99, image: 'assets/keyboard.jpg', category: 'Accessoires' },
    { name: 'Souris', description: 'Souris de jeu', price: 49.99, image: 'assets/mouse.jpg', category: 'Accessoires' }
  ];
  filteredProducts = [...this.products];

  constructor() { }

  ngOnInit(): void { }

  onSearch(): void {
    this.filterProducts();
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.filterProducts();
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product => {
      const matchesCategory = this.selectedCategory === 'Tous' || product.category === this.selectedCategory;
      const matchesSearchQuery = product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || product.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearchQuery;
    });
  }
}
