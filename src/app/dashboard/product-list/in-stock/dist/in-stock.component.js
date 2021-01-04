"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InStockComponent = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var InStockComponent = /** @class */ (function () {
    function InStockComponent(_product, spinner, router) {
        this._product = _product;
        this.spinner = spinner;
        this.router = router;
    }
    InStockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.apiUrl = environment_1.environment.api;
        this._product.fetchInStockProducts().subscribe(function (data) {
            _this.products = data;
            setTimeout(function () {
                _this.spinner.hide();
            }, 100);
        }, function (error) {
            console.log("there has been an error trying to get all products!");
        });
    };
    InStockComponent.prototype.Redirect = function (id) {
        this.router.navigateByUrl("/dashboard/product/" + id + "/overview");
    };
    InStockComponent = __decorate([
        core_1.Component({
            selector: 'app-in-stock',
            templateUrl: './in-stock.component.html',
            styleUrls: ['./in-stock.component.sass']
        })
    ], InStockComponent);
    return InStockComponent;
}());
exports.InStockComponent = InStockComponent;
