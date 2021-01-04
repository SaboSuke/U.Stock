import { Component, OnInit } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SiteService } from 'src/app/services/site.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.sass']
})
export class StatisticsComponent  implements OnInit{
  
  constructor(
    private _product: SiteService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }
    
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 10,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    rewind: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  
  products: any;
  ngOnInit(): void {
    this.spinner.show();
    this._product.getLastAddedProducts().subscribe(
      (data: any)=>{
        this.products = data;
        console.log(data)
        setTimeout(() => {
          this.spinner.hide();
        }, 100);
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
