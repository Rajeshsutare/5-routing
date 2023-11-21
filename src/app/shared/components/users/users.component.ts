import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iusers } from '../../model/interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public usersInfo :Array<Iusers>=[];
  public isSelected !:string;
  constructor(private _usersService:UsersService) { }

  ngOnInit(): void {

    this.usersInfo =this._usersService.getAllUsers()
    console.log(  this.usersInfo);
    
  }


   


}
