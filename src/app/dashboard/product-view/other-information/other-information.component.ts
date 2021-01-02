import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/classes/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-other-information',
  templateUrl: './other-information.component.html',
  styleUrls: ['./other-information.component.sass']
})
export class OtherInformationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _product: SiteService
  ) { }

  id: string =  "";
  code: string = "";
  quantity: Number = 0;
  info: string = "";
  images: Array<string> = [];

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this._product.getProductById(id).subscribe(
      (data: any)=>{
        console.log(data)
        this.code = data.code
        this.quantity = parseInt(data.quantity)
        this.info = data.internal_information
        this.id = data.id  
        this.images = data.images  
      },
      (error) =>  {
        console.log("there has been an error trying to fetch this product: "+id)
      }
    )
  }  

}
