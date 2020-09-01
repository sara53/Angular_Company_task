import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../Services/categories.service';
import {ProductsService} from '../../Services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private myServices:CategoriesService,
    private productServices:ProductsService,
    private route:ActivatedRoute
    ) { }

  subscriber;
  categories;
  products;
  id;
  FilterdProduct: any[]=[];
  category
  catName;
  tab:boolean = false;
  product;
  ngOnInit(): void {

    //This is All Categories
    this.subscriber = this.myServices.getAllCategories().subscribe((categories) => {
      if(categories){
        //console.log(categories);
        this.categories = categories;
      }
    },(err) => {
      console.log(err);
    });

   

    //this is All product
    this.productServices.getAllProducts().subscribe((products:any[]) => {
      if(products){
        //console.log(products);
        this.FilterdProduct =  this.products = products;

      }

      this.route.queryParamMap.subscribe((params)=>{

        this.id = params.get('id');
        //console.log(this.id);

         //Get Category Name 
        this.myServices.getCategoryById(this.id).subscribe((category) => {
          if(category){
            console.log(category);
            this.category = category;
            this.catName = this.category.name;
            console.log(this.catName);
          }
        },(err) => {
          console.log(err);
        });


        this.FilterdProduct = (this.id)?
        this.products.filter(p => p.cid == this.id ):this.products;
  
      });


      
    },(err) => {
      console.log(err);
    });






  }

  ShowDetails(productID){
    // console.log("Done");
    // console.log(productID);
    this.tab = true;
    this.product = this.FilterdProduct.find( p => p.pid == productID);
  
  }

}
