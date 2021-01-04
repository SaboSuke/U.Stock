"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OtherInformationComponent = void 0;
var core_1 = require("@angular/core");
var OtherInformationComponent = /** @class */ (function () {
    function OtherInformationComponent(route, router, _product, spinner) {
        this.route = route;
        this.router = router;
        this._product = _product;
        this.spinner = spinner;
        this.id = "";
        this.code = "";
        this.quantity = 0;
        this.info = "";
        this.images = [];
        this.hasImage = false;
    }
    OtherInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        var id = this.route.snapshot.params.id;
        this._product.getProductById(id).subscribe(function (data) {
            console.log(data);
            _this.code = data.code;
            _this.quantity = parseInt(data.quantity);
            _this.info = data.internal_information;
            _this.id = data.id;
            if (data.hasOwnProperty('images')) {
                _this.images = data.images;
                _this.hasImage = true;
            }
            else
                _this.hasImage = false;
            setTimeout(function () {
                _this.spinner.hide();
            }, 100);
        }, function (error) {
            console.log("there has been an error trying to fetch this product: " + id);
        });
    };
    OtherInformationComponent = __decorate([
        core_1.Component({
            selector: 'app-other-information',
            templateUrl: './other-information.component.html',
            styleUrls: ['./other-information.component.sass']
        })
    ], OtherInformationComponent);
    return OtherInformationComponent;
}());
exports.OtherInformationComponent = OtherInformationComponent;
