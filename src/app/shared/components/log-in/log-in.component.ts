import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomRegex } from '../../regex/regex';
import { AuthService } from '../../services/auth.service';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
@ViewChild('logInForm') logInForm !:NgForm;
public isHavingAcc :boolean=false;
@ViewChild('signUpForm') signUpForm !: NgForm;
  constructor(private _authService:AuthService,
  
    ) { }

  ngOnInit(): void {
 
  }

  onLogIn(username:string,password:string){
    console.log(this.logInForm.value);
    
    this._authService.logInToApp(username,password)
  }
  onSignIn(){
    console.log(this.signUpForm.value);
    
  }

}
