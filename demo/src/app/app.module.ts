import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Component/products/products.component';
import {CategoriesService} from './Services/categories.service';
import {ProductsService} from './Services/products.service';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'', redirectTo:'Products',pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [CategoriesService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
