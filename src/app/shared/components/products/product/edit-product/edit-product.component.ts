import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IprodStatus, Iproducts } from 'src/app/shared/model/interfaces';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public prodId !:string;
  public prodObj !:Iproducts;
  public canEdit : boolean=true;

  constructor(private _productService:ProductsService,
              private _routes:ActivatedRoute,
              private _router:Router,
              private _utilityService:UtilityService,
              private _snackBarService:SnackBarService
    ) { }

  ngOnInit(): void {

  this.prodId = this._routes.snapshot.params['productId']
  console.log(this.prodId);
  this.prodObj = this._productService.getSingleProduct(this.prodId)
  console.log(this.prodObj);

  if(this._routes.snapshot.queryParams['editProduct'] === 'Delivered'){
    this.canEdit=false
  }
  
  }

  onUpdate(pname:string,pstatus:HTMLSelectElement){
    let uObj:Iproducts={
      prodName : pname ,
      prodId :this.prodId,
      ProdStatus :pstatus.value as IprodStatus,
      canReturn :this.prodObj.canReturn
    }
    this._productService.getUpdateProduct(uObj)
    this._snackBarService.openSnackBar('${uObj.prodName} is updated...', 'close')
    this._router.navigate(['/products'])
  }

  onSubmit(pname:HTMLInputElement,pstatus:HTMLSelectElement){
    let prodObj:Iproducts={
      prodName : pname.value,
      ProdStatus:pstatus.value as IprodStatus,
      prodId:this._utilityService.generateUuid(),
      canReturn:Math.random() >= 5 ? 1 : 0
    }
    this._productService.getAddProduct(prodObj)
    this._snackBarService.openSnackBar(`New Product ${prodObj.prodName} is added...`, 'close')
    this._router.navigate(['/products'])
  }

}
