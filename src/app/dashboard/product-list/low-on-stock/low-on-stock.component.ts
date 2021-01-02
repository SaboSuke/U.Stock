import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteService } from 'src/app/services/site.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Products } from 'src/app/classes/products';

@Component({
  selector: 'app-low-on-stock',
  templateUrl: './low-on-stock.component.html',
  styleUrls: ['./low-on-stock.component.sass']
})
export class LowOnStockComponent implements OnInit {

  constructor(
    private _product: SiteService,
  ) { }

  products: any;
  apiUrl: any;

  ngOnInit(): void {
    this.apiUrl = environment.api;
    this._product.fetchLowOnStockProducts().subscribe(
      (data: Products[]) => {
        this.products = data;
        console.log(this.products)
      },
      error => {
        console.log("there has been an error trying to get all products!");
      }
    )
  }
}
