"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SiteService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var http_1 = require("@angular/common/http");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var params = new http_1.HttpParams({ fromString: 'name=foo' });
var SiteService = /** @class */ (function () {
    function SiteService(router, http, _storage) {
        this.router = router;
        this.http = http;
        this._storage = _storage;
        //httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
        /**
         * @DESC send email
        */
        this.endpoint = "";
    }
    SiteService.prototype.sendMail = function (name, mail_to, message, mail_from, subject) {
        return this.http.post(environment_1.environment.api + "handers/sendMail.hand.php", {
            name: name,
            mail_to: mail_to,
            message: message,
            mail_from: mail_from,
            subject: subject
        });
        // .pipe(
        //     tap(message => console.log(message))
        // );
    };
    /**
    * @DESC get user details
    */
    SiteService.prototype.getUserDetails = function (user_id) {
        return this.http.get(environment_1.environment.api + "users/get-user-details/" + user_id);
    };
    /**
    * @DESC get update a product
    */
    SiteService.prototype.updateUserProfile = function (name, last_name, email, address) {
        var Options = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': JSON.stringify(this._storage.getItem('token'))
            })
        };
        var user_id = this._storage.getItem('user_id');
        return this.http.put(environment_1.environment.api + "users/edit-profile/" + user_id, {
            name: name,
            last_name: last_name,
            email: email,
            address: address
        }, Options);
    };
    /**
    * @DESC login to dashboard
    */
    SiteService.prototype.loginDashboard = function (email, password) {
        return this.http.post(environment_1.environment.api + "users/login", {
            email: email,
            password: password
        }, httpOptions);
    };
    /**
    * @DESC get product by id
    */
    SiteService.prototype.getProductById = function (id) {
        return this.http.get(environment_1.environment.api + "products/get-product/" + id);
    };
    /**
    * @DESC get inserted last product
    */
    SiteService.prototype.getLastAddedProducts = function () {
        return this.http.get(environment_1.environment.api + "products/last-added-products/");
    };
    /**
    * @DESC get inserted last product
    */
    SiteService.prototype.getLastInsertedProduct = function () {
        return this.http.get(environment_1.environment.api + "products/last-inserted-product/");
    };
    /**
    * @DESC get all product
    */
    SiteService.prototype.fetchProducts = function () {
        return this.http.get(environment_1.environment.api + "products/all-products");
    };
    /**
    * @DESC get all in stock products
    */
    SiteService.prototype.fetchInStockProducts = function () {
        return this.http.get(environment_1.environment.api + "products/products-in-stock");
    };
    /**
    * @DESC get all out of stock products
    */
    SiteService.prototype.fetchOutOfStockProducts = function () {
        return this.http.get(environment_1.environment.api + "products/products-out-of-stock");
    };
    /**
    * @DESC get all low on stock products
    */
    SiteService.prototype.fetchLowOnStockProducts = function () {
        return this.http.get(environment_1.environment.api + "products/products-low-on-stock");
    };
    /**
    * @DESC count all products
    */
    SiteService.prototype.countProducts = function () {
        return this.http.get(environment_1.environment.api + "products/count-products");
    };
    /**
    * @DESC count all in stock products
    */
    SiteService.prototype.countInStockProducts = function () {
        return this.http.get(environment_1.environment.api + "products/count-products-in-stock");
    };
    /**
    * @DESC count all low on stock products
    */
    SiteService.prototype.countLowOnStockProducts = function () {
        return this.http.get(environment_1.environment.api + "products/count-products-low-on-stock");
    };
    /**
    * @DESC count all out of stock products
    */
    SiteService.prototype.countOutOfStockProducts = function () {
        return this.http.get(environment_1.environment.api + "products/count-products-out-of-stock");
    };
    /**
    * @DESC get update a product
    */
    SiteService.prototype.UpdateProduct = function (name, description, images, price, status, quantity, info) {
        var product_id = this._storage.getItem('id');
        return this.http.put(environment_1.environment.api + "products/edit-product/" + product_id, {
            name: name,
            description: description,
            images: images,
            price: price,
            status: status,
            quantity: quantity,
            info: info
        }, httpOptions);
    };
    /**
    * @DESC get add a new product
    */
    SiteService.prototype.AddProduct = function (name, description, images, price, quantity, info, code, status) {
        return this.http.post(environment_1.environment.api + "products/add-product", {
            name: name,
            description: description,
            images: images,
            price: price,
            quantity: quantity,
            info: info,
            code: code,
            status: status
        });
    };
    /**
    * @DESC update product picture
    */
    SiteService.prototype.AddPicture = function (formdata) {
        return this.http.post(environment_1.environment.api + "products/add-image", {
            formdata: formdata
        });
    };
    SiteService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SiteService);
    return SiteService;
}());
exports.SiteService = SiteService;
