import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { ProductResponseModel } from 'src/app/models/productResponseModule';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44358/api/";
  constructor(private httpClient: HttpClient) { }
  /*getProducts():Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }*/
  getProducts():Observable<ListResponseModel<Product>> {
    let newPath =this.apiUrl +"products/getall";
    return this.httpClient.get<ListResponseModel<Product>>(newPath );
  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath =this.apiUrl +"products/getbyidcategory?categoryId="+categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
