import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteService } from 'src/app/services/site.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Products } from 'src/app/classes/products';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-out-of-stock',
  templateUrl: './out-of-stock.component.html',
  styleUrls: ['./out-of-stock.component.sass']
})
export class OutOfStockComponent implements OnInit {

  constructor(
    private _product: SiteService,
    private spinner: NgxSpinnerService,
    private router: Router,
  ) { }

  products: any;
  apiUrl: any;

  ngOnInit(): void {
    this.spinner.show();
    this.apiUrl = environment.api;
    this._product.fetchOutOfStockProducts().subscribe(
      (data: Products[]) => {
        this.products = data;
        setTimeout(() => {
          this.spinner.hide();
        }, 100);
      },
      error => {
        console.log("there has been an error trying to get all products!");
      }
    )
  }

  Redirect(id: any){
    this.router.navigateByUrl(`/dashboard/product/${id}/overview`);
  }

}
