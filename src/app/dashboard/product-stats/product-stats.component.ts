import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-product-stats',
  templateUrl: './product-stats.component.html',
  styleUrls: ['./product-stats.component.sass']
})
export class ProductStatsComponent implements OnInit {

  constructor(
    private _product: SiteService
  ) { }

  products: any;
  instock : any;
  outofstock : any;
  lowonstock : any;

  ngOnInit(): void {
    this._product.countProducts().subscribe(
      (data) => {
        this.products = data.count;
      }
    )

    this._product.countInStockProducts().subscribe(
      (data) => {
        this.instock = data.count;
      }
    )

    this._product.countOutOfStockProducts().subscribe(
      (data) => {
        this.outofstock = data.count;
      }
    )

    this._product.countLowOnStockProducts().subscribe(
      (data) => {
        this.lowonstock = data.count;
      }
    )
  }

}
