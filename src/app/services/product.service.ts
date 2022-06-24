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

  apiUrl = "https://localhost:44358/api/products/getall";
  constructor(private httpClient: HttpClient) { }
  /*getProducts():Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }*/
  getProducts():Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }
}
