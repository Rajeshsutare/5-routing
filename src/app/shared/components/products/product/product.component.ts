import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproducts } from 'src/app/shared/model/interfaces';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public pId !:string;
  public pObj !:Iproducts;
  constructor(private _productService:ProductsService,
              private _routes:ActivatedRoute,
              private _router:Router
    ) { }

  ngOnInit(): void {

    // this.pId = this._routes.snapshot.params['productId'];
    // console.log(this.pId);
    
    // this.pObj = this._productService.getSingleProduct(this.pId)
    // console.log(this.pObj );

    this._routes.params
      .subscribe((params:Params)=>{
        this.pId = params['productId'],
        this.pObj = this._productService.getSingleProduct(this.pId)
      })

  }

  onEditProduct(){
        this._router.navigate(['editProduct'],{
          queryParamsHandling :'preserve',
          relativeTo:this._routes
        })
  }

  removeProduct(id:string){
    this._productService.getRemoveProduct(this.pId)
    this._router.navigate(['/products'])
  }
  


}
