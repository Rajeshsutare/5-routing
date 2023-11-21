import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { Iusers } from '../model/interfaces';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<Iusers>{

  constructor(private _userService:UsersService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iusers | Observable<Iusers> | Promise<Iusers> {
   let getUserId = route.params['userId']
   return this._userService.getSingleUser(getUserId)
  }
}
