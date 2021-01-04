"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddProductComponent = void 0;
var core_1 = require("@angular/core");
var sweetalert2_1 = require("sweetalert2");
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(route, router, formBuilder, _product, _storage, spinner) {
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this._product = _product;
        this._storage = _storage;
        this.spinner = spinner;
        this.id = "";
        this.images = [];
        this.selectedFile = null;
        this.id = this.route.snapshot.params.id;
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.testing = this.formBuilder.group({});
        this.addProduct = this.formBuilder.group({
            name: "",
            description: "",
            price: "",
            quantity: "",
            info: "",
            code: ""
        });
        setTimeout(function () {
            _this.spinner.hide();
        }, 100);
    };
    AddProductComponent.prototype.test = function (data, event) {
    };
    AddProductComponent.prototype.onFileSelected = function (event) {
        if (event.target.files.length > 0) {
            this.selectedFile = event.target.files[0];
            this._images = this.selectedFile;
        }
    };
    AddProductComponent.prototype.AddImage = function () {
        var formdata = new FormData();
        formdata.append('file', this._images);
        console.log(formdata);
        this._product.AddPicture(formdata).subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log("error trying to add new image"); });
    };
    AddProductComponent.prototype.AddProduct = function (data, dataevent) {
        var _this = this;
        console.log(data);
        var status = "";
        if (parseInt(data.quantity) == 0)
            status = 'Out Of Stock';
        else if (parseInt(data.quantity) >= 10)
            status = 'In Stock';
        else
            status = 'Low On Stock';
        var images = ["not_available.png"];
        console.log(data);
        this._product.AddProduct(data.name, data.description, images, data.price, data.quantity, data.info, data.code, status).subscribe(function (data) {
            if (data.success) {
                var Toast = sweetalert2_1["default"].mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: function (toast) {
                        toast.addEventListener('mouseenter', sweetalert2_1["default"].stopTimer);
                        toast.addEventListener('mouseleave', sweetalert2_1["default"].resumeTimer);
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Product Added Successfully'
                }).then(function () {
                    _this.addProduct.reset();
                });
            }
            else
                console.log("There has been an error updating your product!");
        }, function (error) { return console.log(error); });
    };
    AddProductComponent = __decorate([
        core_1.Component({
            selector: 'app-add-product',
            templateUrl: './add-product.component.html',
            styleUrls: ['./add-product.component.sass']
        })
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
