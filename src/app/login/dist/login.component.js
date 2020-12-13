"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formBuilder, _site, _auth) {
        this.router = router;
        this.formBuilder = formBuilder;
        this._site = _site;
        this._auth = _auth;
        this.checkoutForm = this.formBuilder.group({
            email: '',
            password: ''
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Login = function (customerData, event) {
        var _this = this;
        event.preventDefault();
        //this.checkoutForm.reset();
        this._site.loginDashboard(customerData.email, customerData.password).subscribe(function (data) {
            if (data.success) {
                console.log(data.message);
                _this._auth.setLoggedIn(true);
                _this._auth.setToken(data.token);
                if (_this._auth.isLoggedIn() == "true")
                    //this.router.navigateByUrl('/dashboard/home');
                    _this.router.navigate(['/dashboard/home']);
                else
                    console.log("you're not logged in");
            }
            else if (data.code == "ENF")
                console.log(data.message);
            else if (data.code == "IP")
                console.log(data.message);
        }, function (error) {
            console.log(error + " there has been an error");
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.sass']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
