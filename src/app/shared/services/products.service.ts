import { Injectable } from '@angular/core';
import { IprodStatus, Iproducts } from '../model/interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public ProductsArray:Array<Iproducts>=[
    {
      prodName:'iphone',
      prodId :'1',
      ProdStatus:IprodStatus.InProcess,
      canReturn:0
    },
    {
      prodName:'iphone 14',
      prodId :'2',
      ProdStatus:IprodStatus.Dispatched,
      canReturn:1
    },
    {
      prodName:'iphone 15',
      prodId :'3',
      ProdStatus:IprodStatus.Delivered,
      canReturn:0
    }
   ];
  
  constructor(private _router:Router) { }

  getAllProduct(){
    return this.ProductsArray;
  }

  getSingleProduct(id:string){
    return this.ProductsArray.find(p=>{
      return p.prodId === id
    })!
  }

  getRemoveProduct(id:string){
    let indx = this.ProductsArray.findIndex(p=>p.prodId === id)
    let del = this.ProductsArray.splice(indx,1)
   
  }

  getUpdateProduct(pObj:Iproducts){
    return this.ProductsArray.forEach(p=>{
      if(p.prodId === pObj.prodId){
        p.prodName = pObj.prodName,
        p.ProdStatus = pObj.ProdStatus,
        p.canReturn = pObj.canReturn
      }
    })
  }

  getAddProduct(pObj:Iproducts){
    this.ProductsArray.push(pObj)
  }

 
}
