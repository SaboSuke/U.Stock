"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StatisticsComponent = void 0;
var core_1 = require("@angular/core");
var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(_product, router, spinner) {
        this._product = _product;
        this.router = router;
        this.spinner = spinner;
        this.customOptions = {
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            margin: 10,
            mouseDrag: true,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            navText: ['', ''],
            rewind: false,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                740: {
                    items: 3
                },
                940: {
                    items: 4
                }
            },
            nav: false
        };
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this._product.getLastAddedProducts().subscribe(function (data) {
            _this.products = data;
            console.log(data);
            setTimeout(function () {
                _this.spinner.hide();
            }, 100);
        }, function (error) {
            console.log("there has been an error trying to get last inserted product");
        });
    };
    StatisticsComponent.prototype.Redirect = function (id) {
        this.router.navigateByUrl("/dashboard/product/" + id + "/overview");
    };
    StatisticsComponent = __decorate([
        core_1.Component({
            selector: 'app-statistics',
            templateUrl: './statistics.component.html',
            styleUrls: ['./statistics.component.sass']
        })
    ], StatisticsComponent);
    return StatisticsComponent;
}());
exports.StatisticsComponent = StatisticsComponent;
