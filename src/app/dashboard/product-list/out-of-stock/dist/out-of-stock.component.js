"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OutOfStockComponent = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var OutOfStockComponent = /** @class */ (function () {
    function OutOfStockComponent(_product, spinner, router) {
        this._product = _product;
        this.spinner = spinner;
        this.router = router;
    }
    OutOfStockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.apiUrl = environment_1.environment.api;
        this._product.fetchOutOfStockProducts().subscribe(function (data) {
            _this.products = data;
            setTimeout(function () {
                _this.spinner.hide();
            }, 100);
        }, function (error) {
            console.log("there has been an error trying to get all products!");
        });
    };
    OutOfStockComponent.prototype.Redirect = function (id) {
        this.router.navigateByUrl("/dashboard/product/" + id + "/overview");
    };
    OutOfStockComponent = __decorate([
        core_1.Component({
            selector: 'app-out-of-stock',
            templateUrl: './out-of-stock.component.html',
            styleUrls: ['./out-of-stock.component.sass']
        })
    ], OutOfStockComponent);
    return OutOfStockComponent;
}());
exports.OutOfStockComponent = OutOfStockComponent;
