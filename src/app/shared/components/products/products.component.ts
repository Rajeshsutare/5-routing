import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../model/interfaces';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public isSelected !:string;
public  allProduct :Array<Iproducts>=[]
  constructor(private _productsService:ProductsService,
              private _router:Router,
      ) { }

  ngOnInit(): void {
    this.allProducts()

  }

  allProducts(){
    this.allProduct = this._productsService.getAllProduct()
    console.log(this.allProduct);
    
  }





}
