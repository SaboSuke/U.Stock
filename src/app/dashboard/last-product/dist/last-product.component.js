"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LastProductComponent = void 0;
var core_1 = require("@angular/core");
var LastProductComponent = /** @class */ (function () {
    function LastProductComponent(_product, router) {
        this._product = _product;
        this.router = router;
        this.id = "";
        this.name = "";
        this.description = "";
        this.images = [];
    }
    LastProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._product.getLastInsertedProduct().subscribe(function (data) {
            _this.id = data[0]._id;
            _this.name = data[0].name;
            _this.description = data[0].description;
            _this.images = data[0].images;
        }, function (error) {
            console.log("there has been an error trying to get last inserted product");
        });
    };
    LastProductComponent.prototype.Redirect = function (id) {
        this.router.navigateByUrl("/dashboard/product/" + id + "/overview");
    };
    LastProductComponent = __decorate([
        core_1.Component({
            selector: 'app-last-product',
            templateUrl: './last-product.component.html',
            styleUrls: ['./last-product.component.sass']
        })
    ], LastProductComponent);
    return LastProductComponent;
}());
exports.LastProductComponent = LastProductComponent;
