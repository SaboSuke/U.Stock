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
var http_1 = require("@angular/common/http");
var environment_1 = require("src/environments/environment");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
    })
};
var params = new http_1.HttpParams({ fromString: 'name=foo' });
var SiteService = /** @class */ (function () {
    function SiteService(router, http) {
        this.router = router;
        this.http = http;
    }
    //httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
    /**
     * send email
     * /
     *
    /*
    endpoint: string = "";
    sendMail(name, mail_to, message, mail_from, subject) {
    return this.http.post(
        environment.api + "handers/sendMail.hand.php", {
        name,
        mail_to,
        message,
        mail_from,
        subject
    }
    ).pipe(
        tap(
        message => console.log(message)
        )
    );
    }
    */
    /**
    * login to dashboard
    */
    SiteService.prototype.loginDashboard = function (email, password) {
        return this.http.post(environment_1.environment.api + "users/login", {
            email: email,
            password: password
        }, httpOptions);
    };
    SiteService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SiteService);
    return SiteService;
}());
exports.SiteService = SiteService;
