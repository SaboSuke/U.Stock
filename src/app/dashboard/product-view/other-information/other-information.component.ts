import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/classes/products';
import { CommonModule } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-other-information',
  templateUrl: './other-information.component.html',
  styleUrls: ['./other-information.component.sass']
})
export class OtherInformationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _product: SiteService,
    private spinner: NgxSpinnerService
  ) { }

  id: string =  "";
  code: string = "";
  quantity: Number = 0;
  info: string = "";
  images: Array<string> = [];

  hasImage: boolean = false;
  ngOnInit(): void {
    this.spinner.show();
    let id = this.route.snapshot.params.id;
    this._product.getProductById(id).subscribe(
      (data: any)=>{
        console.log(data)
        this.code = data.code
        this.quantity = parseInt(data.quantity)
        this.info = data.internal_information
        this.id = data.id  
        if (data.hasOwnProperty('images')){
          this.images = data.images
          this.hasImage = true
        }else
          this.hasImage = false
          
        setTimeout(() => {
          this.spinner.hide();
        }, 100);
      },
      (error) =>  {
        console.log("there has been an error trying to fetch this product: "+id)
      }
    )
  }  

}
