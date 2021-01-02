import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteService } from 'src/app/services/site.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Products } from 'src/app/classes/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.sass']
})
export class AllComponent implements OnInit {

  constructor(
    private _product: SiteService,
    private router: Router,
  ) { }

  products: any;
  apiUrl: any;

  ngOnInit(): void {
    this.apiUrl = environment.api;
    this._product.fetchProducts().subscribe(
      (data: Products[]) => {
        this.products = data;
        console.log(this.products)
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
