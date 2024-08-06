import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './book/nav-bar/nav-bar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { initFlowbite } from 'flowbite';
import { BannerComponent } from './pages/banner/banner.component';
import { ProductCarouselComponent } from './pages/product-carousel/product-carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,FooterComponent,BannerComponent,ProductCarouselComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}