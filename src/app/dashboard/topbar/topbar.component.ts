import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.sass']
})
export class TopbarComponent implements OnInit {

  constructor(
    private _storage: LocalStorageService,
    private router: Router,
    private _auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

  signOut(){
    if (this._auth.isLoggedIn()) {
      this._auth.setLoggedIn(false)
      this.router.navigateByUrl(`/login`);
    }else
      this.router.navigateByUrl(`/login`);

  }

}
