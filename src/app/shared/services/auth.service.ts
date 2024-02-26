import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logInStatus :boolean =false;
  constructor(private _router:Router,
    private _snackBarService:SnackBarService
    ) { }

  isAuthonticated():Promise<boolean>{
   return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      if(localStorage.getItem('Token')){
        this.logInStatus=true;
      }else{
        this.logInStatus=false;
      } 
      resolve(this.logInStatus)
    },300)
   })
  }

  logInToApp(username:string,password:string){
    if(username === 'raj@gmail.com' && password === 'zaq1ZAQ!'){
      localStorage.setItem('Token','JWT Token')
      localStorage.setItem('userrole','admin')
      this.logInStatus=true;
      this._router.navigate(['home'])
        this._snackBarService.openSnackBar('Logged In Successfully...','close')
    }else if (username === 'rajesh@gmail.com' && password === 'zaq1ZAQ!'){
      localStorage.setItem('Token','JWT Token')
      localStorage.setItem('userrole','candidate')
      this.logInStatus=true;
      this._router.navigate(['home'])
        this._snackBarService.openSnackBar('Logged In Successfully...','close')
    }else if (username === 'raje@gmail.com' && password === 'zaq1ZAQ!'){
      localStorage.setItem('Token','JWT Token')
      localStorage.setItem('userrole','superadmin')
      this.logInStatus=true;
      this._router.navigate(['home'])
        this._snackBarService.openSnackBar('Logged In Successfully...','close')
    }else{
      this.logInStatus=false;
      this._snackBarService.openSnackBar('Invalid User Name or Password...','close')
      this._router.navigate(['/'])
    }
  }

  logOutService(){
    this.logInStatus=false
    this._router.navigate(['/'])
    localStorage.removeItem('Token')
    localStorage.removeItem('userrole')
    this._snackBarService.openSnackBar('Logged Out successfully...','close')
  }
}
