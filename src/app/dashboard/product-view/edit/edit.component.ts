import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SiteService } from 'src/app/services/site.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  updateProduct:any
  testing:any
  product: any
  id: any = ""
  images: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder:FormBuilder,
    private _product: SiteService,
    private _storage: LocalStorageService
  ) { 
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.testing = this.formBuilder.group({});
    //getting product information
    this.id = this._storage.getItem('id')
    this._product.getProductById(this.id).subscribe(
      (data: any)=>{
        this.product = data
        this.images = data.images
        //setting up
        this.updateProduct = this.formBuilder.group({
          name: this.product.name,
          description: this.product.description,
          price: this.product.price,
          status: this.product.status,
          quantity: this.product.quantity,
          info: this.product.internal_information,
        });
      },
      (error) =>  {
        console.log("there has been an error trying to fetch this product: "+this.id)
      }
    )
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

  UpdateProduct( data: any, dataevent: any) {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.images.push(fd);
    console.log(fd, this.images)
    this._product.UpdateProduct(
      data.name,
      data.description,
      this.images,
      data.price,
      data.status,
      data.quantity,
      data.info
    ).subscribe(
      (data) => {
        if(data.success){
          console.log("Product updated successfully!")
        }else
          console.log("There has been an error updating your product!")
      },
      (error) => console.log(error)
    )
  }

}
