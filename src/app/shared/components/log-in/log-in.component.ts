import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from '../../regex/regex';
import { AuthService } from '../../services/auth.service';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private _authService:AuthService,
  
    ) { }

  ngOnInit(): void {
 
  }

  onLogIn(username:string,password:string){
    this._authService.logInToApp(username,password)
  }


}
