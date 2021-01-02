import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/classes/products';
import { SiteService } from 'src/app/services/site.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  constructor(
    private _product: SiteService,
  ) { 
  }

  products: Products[] | undefined;
  apiUrl: any;

  ngOnInit(): void {
    this.apiUrl = environment.api;
  }

  changeindex: Number = 0;

  change(event: any, index: Number){
    console.log(event.target, index)
    const target = event.target;

    //remove all active class from ul elements
    const selector = target.parentElement.parentElement.querySelectorAll('li');
    selector.forEach((element: { classList: { remove: (arg0: string) => void; }; })  => {
        element.classList.remove('active')
    });
    
    //change component settings
    switch(index){
      case 0:{ 
        this.changeindex = 0;
        target.parentElement.classList.add("active")
        break;
      }
      case 1:{ 
        this.changeindex = 1;
        target.parentElement.classList.add("active")
        break;
      }
      case 2:{ 
        this.changeindex = 2;
        target.parentElement.classList.add("active")
        break;
      }
      case 3:{ 
        this.changeindex = 3;
        target.parentElement.classList.add("active")
        break;
      }
      default: {
        break
      }
    }
  }


}
