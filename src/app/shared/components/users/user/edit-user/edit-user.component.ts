import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/interfaces';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public usId !:string;
  public usObj !:Iusers;
  public canEditUser :boolean=true;
  constructor(private _userService:UsersService,
              private _routes:ActivatedRoute,
              private _router:Router,
              private _utilityService:UtilityService,
              private _snackBarService:SnackBarService
    ) { }

  ngOnInit(): void {


    this.usId = this._routes.snapshot.params['userId']
    console.log(this.usId);
    this.usObj = this._userService.getSingleUser(this.usId)
    console.log(this.usObj);

    if(this._routes.snapshot.queryParams['editUser'] === 'admin'){
      this.canEditUser = false
    }
    
    
  }

  onUpdate(uName:string,uRole:HTMLSelectElement){
    let usObj:Iusers={
    userName : uName,
    userId:this.usId,
    editStatus: uRole.value as 'candidate' | 'admin'

    }
    this._userService.getUpdateUser(usObj)
    this._snackBarService.openSnackBar(`${usObj.userName} updated..`, 'close')
  }

  onSubmit(uname:HTMLInputElement,uRole:HTMLSelectElement){
    let uObj:Iusers={
      userName :uname.value,
      userId : this._utilityService.generateUuid(),
      editStatus:uRole.value as 'candidate' | 'admin'
    }

    this._userService.getAddUser(uObj)
    this._snackBarService.openSnackBar(`New User ${uObj.userName } is Added...`, 'close')
    this._router.navigate(['/users'])
  }

}
