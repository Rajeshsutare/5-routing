import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/interfaces';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private _usersService:UsersService,
              private _router:Router,
              private _routes:ActivatedRoute
    ) { }

    public uId !:string;
    public singleUser !:Iusers;

  ngOnInit(): void {

    // this.uId = +this._routes.snapshot.params['userId']
    // console.log(this.uId );

    // this.singleUser = this._usersService.getSingleUser(this.uId)
    // console.log( this.singleUser );

    this._routes.params
      .subscribe((params:Params)=>{
        console.log(params);
        this.uId = params['userId']
        this.singleUser=this._usersService.getSingleUser(this.uId)
      })
  }

  onEditBtn(){
    this._router.navigate(['editUser'],{
      queryParamsHandling:'preserve',
      relativeTo:this._routes
    })
  }

  onRemove(id:string){
    this._usersService.getRemoveUser(id)
  }

}
