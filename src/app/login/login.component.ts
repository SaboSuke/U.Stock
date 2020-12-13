import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SiteService } from '../services/site.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  checkoutForm: any;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _site: SiteService,
    private _auth: AuthService
  ) { 
    this.checkoutForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }



  Login(customerData: any, event: any){
    event.preventDefault();
    //this.checkoutForm.reset();
    this._site.loginDashboard(customerData.email, customerData.password).subscribe(
      data =>{
        if (data.success){
          console.log(data.message);
          this._auth.setLoggedIn(true)
          this._auth.setToken(data.token);
          
          if (this._auth.isLoggedIn() == "true")
            //this.router.navigateByUrl('/dashboard/home');
            this.router.navigate(['/dashboard/home']);
          else
            console.log("you're not logged in")
        } else if (data.code == "ENF")
            console.log(data.message);
          else if (data.code == "IP")
            console.log(data.message);
      }
      ,error =>{
        console.log(error + " there has been an error");
      }
    );
  }

}
