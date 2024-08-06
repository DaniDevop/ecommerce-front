import { Routes } from '@angular/router';
import { ProductCarouselComponent } from './pages/product-carousel/product-carousel.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ListeProductComponent } from './pages/liste-product/liste-product.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [

    {path:'',component:ProductCarouselComponent},
    {path:'detailsProduct',component:ProductDetailsComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'listesProduit',component:ListeProductComponent},
    {path:'cart',component:CartComponent},

];
