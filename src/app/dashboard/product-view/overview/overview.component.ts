import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/classes/products';
import { SiteService } from 'src/app/services/site.service';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.sass']
})
export class OverviewComponent implements OnInit {

  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _product: SiteService,
    private _storage: LocalStorageService,
    private spinner: NgxSpinnerService
  ) {}
  

  id: string =  "";
  name: string = "";
  description: string = "";
  price: string = "";
  images: Array<string> = [];
  status: string = "";
  
  hasImage : boolean = false;
  ngOnInit(): void {
    this.spinner.show();
    let id = this.route.snapshot.params.id;
    this._storage.createItem('id', id);
    this._product.getProductById(id).subscribe(
      (data: any)=>{
        console.log(data)
        this.id = data.id
        this.name = data.name
        this.description = data.description
        if (data.hasOwnProperty('images')){
          this.images = data.images
          this.hasImage = true
        }else{
          this.hasImage = false
        }
        this.price = data.price
        this.status = data.status
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
