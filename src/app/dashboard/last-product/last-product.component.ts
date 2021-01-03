import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-last-product',
  templateUrl: './last-product.component.html',
  styleUrls: ['./last-product.component.sass']
})
export class LastProductComponent implements OnInit {

  constructor(
    private _product: SiteService,
    private router: Router,
  ) { }

  id: string =  "";
  name: string = "";
  description: string = "";
  images: Array<string> = [];
  
  ngOnInit(): void {
    this._product.getLastInsertedProduct().subscribe(
      (data: any)=>{
        this.id = data[0]._id
        this.name = data[0].name
        this.description = data[0].description
        this.images = data[0].images
      },
      (error) =>  {
        console.log("there has been an error trying to get last inserted product")
      }
    )
  }

  Redirect(id: any) {
    this.router.navigateByUrl(`/dashboard/product/${id}/overview`);
  }

}
