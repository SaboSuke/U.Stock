"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditComponent = void 0;
var core_1 = require("@angular/core");
var sweetalert2_1 = require("sweetalert2");
var EditComponent = /** @class */ (function () {
    function EditComponent(route, router, formBuilder, _product, _storage, spinner) {
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
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        // this.testing = this.formBuilder.group({});
        //getting product information
        this.id = this._storage.getItem('id');
        this._product.getProductById(this.id).subscribe(function (data) {
            _this.product = data;
            _this.images = data.images;
            //setting up
            _this.updateProduct = _this.formBuilder.group({
                name: _this.product.name,
                description: _this.product.description,
                price: _this.product.price,
                status: _this.product.status,
                quantity: _this.product.quantity,
                info: _this.product.internal_information
            });
            setTimeout(function () {
                _this.spinner.hide();
            }, 100);
        }, function (error) {
            console.log("there has been an error trying to fetch this product: " + _this.id);
        });
    };
    EditComponent.prototype.test = function (data, event) {
    };
    EditComponent.prototype.onFileSelected = function (event) {
        if (event.target.files.length > 0) {
            this.selectedFile = event.target.files[0];
            this._images = this.selectedFile;
        }
    };
    EditComponent.prototype.AddImage = function () {
        var formdata = new FormData();
        formdata.append('file', this._images);
        console.log(formdata);
        this._product.AddPicture(formdata).subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log("error trying to add new image"); });
    };
    EditComponent.prototype.UpdateProduct = function (data, dataevent) {
        // const fd = new FormData();
        // fd.append('image', this.selectedFile, this.selectedFile.name);
        // this.images.push(fd);
        // console.log(fd, this.images)
        this._product.UpdateProduct(data.name, data.description, this.images, data.price, data.status, data.quantity, data.info).subscribe(function (data) {
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
                    icon: 'info',
                    title: 'Update In Progress'
                }).then(function () {
                    sweetalert2_1["default"].fire('Success', 'Product Updated Successfully!', 'success');
                });
            }
            else
                console.log("There has been an error updating your product!");
        }, function (error) { return console.log(error); });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            templateUrl: './edit.component.html',
            styleUrls: ['./edit.component.sass']
        })
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
