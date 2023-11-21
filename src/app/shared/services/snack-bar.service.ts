import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _matSnackBar:MatSnackBar) { }

  openSnackBar(msg:string,action:string){
    this._matSnackBar.open(msg,action,{
      duration:2000,
      verticalPosition:'top',
      horizontalPosition:'center'

    })

  }
}
