import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.sass']
})
export class ProductViewComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
  }
  
  changeindex: Number = 1;

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
