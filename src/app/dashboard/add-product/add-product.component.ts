import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SiteService } from 'src/app/services/site.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from "sweetalert2";
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent implements OnInit {

  addProduct:any
  testing:any
  product: any
  id: any = ""
  images: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder:FormBuilder,
    private _product: SiteService,
    private _storage: LocalStorageService,
    private spinner: NgxSpinnerService
  ) { 
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.spinner.show();
    this.testing = this.formBuilder.group({});
    this.addProduct = this.formBuilder.group({
      name: "",
      description: "",
      price: "",
      quantity: "",
      info: "",
      code: "",
    });
    setTimeout(() => {
      this.spinner.hide();
    }, 100);
  }

  test(data: any, event: any){

  }

  _images: any
  selectedFile: any = null;
  onFileSelected(event:any){
    if(event.target.files.length > 0){
      this.selectedFile = event.target.files[0]
      this._images = this.selectedFile;
    }
  }  

  AddImage(){
    const formdata = new FormData();
    formdata.append('file', this._images)
    console.log(formdata)

    this._product.AddPicture(formdata).subscribe(
      (data:any) => {
        console.log(data)
      },
      (error:any) =>  console.log("error trying to add new image")
    )
  }

  AddProduct( data: any, dataevent: any) {
    console.log(data)
    var status = ""
    if(parseInt(data.quantity) == 0)
      status = 'Out Of Stock';
    else if(parseInt(data.quantity) >= 10)
            status = 'In Stock';
    else
      status = 'Low On Stock';

    var images = ["not_available.png"]
    console.log(data)
    this._product.AddProduct(
      data.name,
      data.description,
      images,
      data.price,
      data.quantity,
      data.info,
      data.code,
      status
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
              icon: 'success',
              title: 'Product Added Successfully'
            }).then(()=>{
              this.addProduct.reset();
            })
        }else
          console.log("There has been an error updating your product!")
      },
      (error) => console.log(error)
    )
  }


}
