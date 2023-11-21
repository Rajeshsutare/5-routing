import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Iproducts } from '../model/interfaces';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<Iproducts>{

  constructor(private _productService:ProductsService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Iproducts  | Observable<Iproducts> | Promise<Iproducts> {
      let getProdId = route.params['productId']
      return this._productService.getSingleProduct(getProdId)
    }
}
