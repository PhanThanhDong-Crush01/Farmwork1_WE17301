import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/Client/product-list/product-list.component';
import { HomeComponent } from './components/Client/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductListComponent }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
