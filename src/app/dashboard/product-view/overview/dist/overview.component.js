"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OverviewComponent = void 0;
var core_1 = require("@angular/core");
var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(route, router, _product, _storage, spinner) {
        this.route = route;
        this.router = router;
        this._product = _product;
        this._storage = _storage;
        this.spinner = spinner;
        this.id = "";
        this.name = "";
        this.description = "";
        this.price = "";
        this.images = [];
        this.status = "";
        this.hasImage = false;
    }
    OverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        var id = this.route.snapshot.params.id;
        this._storage.createItem('id', id);
        this._product.getProductById(id).subscribe(function (data) {
            console.log(data);
            _this.id = data.id;
            _this.name = data.name;
            _this.description = data.description;
            if (data.hasOwnProperty('images')) {
                _this.images = data.images;
                _this.hasImage = true;
            }
            else {
                _this.hasImage = false;
            }
            _this.price = data.price;
            _this.status = data.status;
            setTimeout(function () {
                _this.spinner.hide();
            }, 100);
        }, function (error) {
            console.log("there has been an error trying to fetch this product: " + id);
        });
    };
    OverviewComponent = __decorate([
        core_1.Component({
            selector: 'app-overview',
            templateUrl: './overview.component.html',
            styleUrls: ['./overview.component.sass']
        })
    ], OverviewComponent);
    return OverviewComponent;
}());
exports.OverviewComponent = OverviewComponent;
