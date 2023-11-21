import { Injectable } from '@angular/core';
import { Iusers } from '../model/interfaces';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersService {


  public  userArray:Array<Iusers>=[
    {
      userName:'Jhon',
      userId:'1',
      editStatus:'admin'
    },
    {
      userName:'May',
      userId:'2',
      editStatus:'candidate'
    },
    {
      userName:'Jun',
      userId:'3',
      editStatus:'candidate'
    },
    {
      userName:'Tony',
      userId:'4',
      editStatus:'admin'
    }
  ];
  
  constructor(private _router:Router) { }

  getAllUsers(){
    return this.userArray;
  }

  getSingleUser(id:string){
   return this.userArray.find(u=>{
    return  u.userId === id
    })!
  }

  getUpdateUser(uObj:Iusers){
    this.userArray.forEach(u=>{
     if( u.userId === uObj.userId){
      u.userName = uObj.userName,
      u.editStatus=uObj.editStatus
      this._router.navigate(['/users'])
     }
    })
  }

  getRemoveUser(id:string){
    let indx = this.userArray.findIndex(indx=> indx.userId === id)
    let delIndx = this.userArray.splice(indx,1)
    this._router.navigate(['/users'])
  }

  getAddUser(uObj:Iusers){
    this.userArray.push(uObj)
  }
}
