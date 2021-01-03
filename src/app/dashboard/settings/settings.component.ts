import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SiteService } from 'src/app/services/site.service';
import Swal from 'sweetalert2'

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
    private _storage: LocalStorageService
  ) { }

  name: string = ""
  address: string = ""
  last_name: string = ""
  email: string = ""

  ngOnInit(): void {
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
      },
      (error) => console.log('error trying to get user details')
    )
    
  }

  UpdateProfile(event: any, data: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You want to update your profile details?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, udpate!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._site.updateUserProfile(
          data.name,
          data.last_name,
          data.email,
          data.address
        ).subscribe(
          (data) => {
            if(data.success){
              swalWithBootstrapButtons.fire(
                'Updated!',
                'User updated successfully!',
                'success'
              )
            }else
              console.log("There has been an error updating your profile!")
          },
          (error) => console.log(error)
        )
        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Profile update has been canceled!',
          'error'
        )
      }
    })
  }

}
