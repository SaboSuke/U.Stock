"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductStatsComponent = void 0;
var core_1 = require("@angular/core");
var ProductStatsComponent = /** @class */ (function () {
    function ProductStatsComponent(_product) {
        this._product = _product;
    }
    ProductStatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._product.countProducts().subscribe(function (data) {
            _this.products = data.count;
        });
        this._product.countInStockProducts().subscribe(function (data) {
            _this.instock = data.count;
        });
        this._product.countOutOfStockProducts().subscribe(function (data) {
            _this.outofstock = data.count;
        });
        this._product.countLowOnStockProducts().subscribe(function (data) {
            _this.lowonstock = data.count;
        });
    };
    ProductStatsComponent = __decorate([
        core_1.Component({
            selector: 'app-product-stats',
            templateUrl: './product-stats.component.html',
            styleUrls: ['./product-stats.component.sass']
        })
    ], ProductStatsComponent);
    return ProductStatsComponent;
}());
exports.ProductStatsComponent = ProductStatsComponent;
