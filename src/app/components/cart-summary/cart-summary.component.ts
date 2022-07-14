import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor( private carService:CartService,private toastrService:ToastrService) { }
  cartItems:CartItem[] = [];
  ngOnInit(): void {

    this.getcart();
  }
  getcart(){
    this.cartItems =this.carService.list();
  }

  removeFromCart(product:Product){
    this.carService.removeFromCart(product)
    this.toastrService.error(product.productName+"sepetten silindi","Silindi")
  }
}
