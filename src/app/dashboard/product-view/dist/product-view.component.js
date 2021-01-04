"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductViewComponent = void 0;
var core_1 = require("@angular/core");
var ProductViewComponent = /** @class */ (function () {
    function ProductViewComponent(spinner) {
        this.spinner = spinner;
        this.changeindex = 1;
    }
    ProductViewComponent.prototype.ngOnInit = function () {
    };
    ProductViewComponent.prototype.change = function (event, index) {
        console.log(event.target, index);
        var target = event.target;
        //remove all active class from ul elements
        var selector = target.parentElement.parentElement.querySelectorAll('li');
        selector.forEach(function (element) {
            element.classList.remove('active');
        });
        //change component settings
        switch (index) {
            case 0: {
                this.changeindex = 0;
                target.parentElement.classList.add("active");
                break;
            }
            case 1: {
                this.changeindex = 1;
                target.parentElement.classList.add("active");
                break;
            }
            case 2: {
                this.changeindex = 2;
                target.parentElement.classList.add("active");
                break;
            }
            case 3: {
                this.changeindex = 3;
                target.parentElement.classList.add("active");
                break;
            }
            default: {
                break;
            }
        }
    };
    ProductViewComponent = __decorate([
        core_1.Component({
            selector: 'app-product-view',
            templateUrl: './product-view.component.html',
            styleUrls: ['./product-view.component.sass']
        })
    ], ProductViewComponent);
    return ProductViewComponent;
}());
exports.ProductViewComponent = ProductViewComponent;
