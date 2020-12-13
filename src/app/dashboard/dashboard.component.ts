import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this._auth.isLoggedIn() === 'false') {
      this.router.navigateByUrl('/');
      this._auth.setToken("");
    }
  }

}
