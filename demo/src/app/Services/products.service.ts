import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = "https://localhost:44371/";

  constructor(private myClient:HttpClient) {}

  getAllProducts(){
    return this.myClient.get(`${this.baseUrl}api/Products`);
  }

 
}
