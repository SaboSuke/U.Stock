import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {

  profileform: any;
  constructor(
    private formBuilder: FormBuilder,
    private _site: SiteService,
  ) { 
    this.profileform = this.formBuilder.group({
      name: 'susan',
      last_name: 'lily',
      email: 'susan.lily@gmail.com',
      address: 'California los angelos',
      password: '123'
    });
  }

  ngOnInit(): void {
  }

  UpdateProfile(event: any, data: any) {
    //event.preventDefault();
    //this.profileform.reset();
  }

}
