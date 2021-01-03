import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.sass']
})
export class ProfileSectionComponent implements OnInit {

  constructor(
    private _site: SiteService,
    private _storage: LocalStorageService
  ) { }

  name: string =  "";
  last_name: string =  "";
  email: string =  "";
  joined_at: string =  "";
  role: string =  "Admin";

  ngOnInit(): void {
    let id = this._storage.getItem('user_id');
    this._site.getUserDetails(id).subscribe(
      (data:any) => {
        this.name = data.name
        this.last_name = data.last_name
        this.email = data.email   
        this.joined_at = data.createdAt.slice(0,10)
      }
    )
  }

}
