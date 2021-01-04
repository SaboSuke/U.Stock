import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SiteService } from 'src/app/services/site.service';
import Swal from 'sweetalert2'
import { NgxSpinnerService } from 'ngx-spinner';

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
    private _storage: LocalStorageService,
    private spinner: NgxSpinnerService,
  ) { }

  name: string = ""
  address: string = ""
  last_name: string = ""
  email: string = ""

  ngOnInit(): void {
    this.spinner.show();
    let user_id = this._storage.getItem("user_id");
    this._site.getUserDetails(user_id).subscribe(
      (data: any) =>{
        this.name = data.name
        this.address = data.address
        this.last_name = data.last_name
        this.email = data.email
        
        this.profileform = this.formBuilder.group({
          name: this.name,
          last_name: this.last_name,
          email: this.email,
          address: this.address
        });
        setTimeout(() => {
          this.spinner.hide();
        }, 100);
      },
      (error) => console.log('error trying to get user details')
    )
    
  }

  UpdateProfile(event: any, data: any) {
        this._site.updateUserProfile(
          data.name,
          data.last_name,
          data.email,
          data.address
        ).subscribe(
          (data) => {
            if(data.success){
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'info',
                title: 'Updating Profile...'
              }).then(()=>{
                this.ngOnInit()
                Swal.fire(
                  'Success',
                  'Profile Updated Successfully!',
                  'success'
                )
              })
            }else
              console.log("There has been an error updating your profile!")
          },
          (error) => console.log(error)
        )
    // })
  }

}
