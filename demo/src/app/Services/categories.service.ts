import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl = "https://localhost:44371/";

  constructor(private myClient:HttpClient) {}

  getAllCategories(){
    return this.myClient.get(`${this.baseUrl}api/Categories`);
  }

  getCategoryById(id){
    return this.myClient.get(`${this.baseUrl}api/Categories/${id}`);
  }


}
