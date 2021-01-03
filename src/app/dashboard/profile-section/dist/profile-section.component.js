"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProfileSectionComponent = void 0;
var core_1 = require("@angular/core");
var ProfileSectionComponent = /** @class */ (function () {
    function ProfileSectionComponent(_site, _storage) {
        this._site = _site;
        this._storage = _storage;
        this.name = "";
        this.last_name = "";
        this.email = "";
        this.joined_at = "";
        this.role = "Admin";
    }
    ProfileSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._storage.getItem('user_id');
        this._site.getUserDetails(id).subscribe(function (data) {
            _this.name = data.name;
            _this.last_name = data.last_name;
            _this.email = data.email;
            _this.joined_at = data.createdAt.slice(0, 10);
        });
    };
    ProfileSectionComponent = __decorate([
        core_1.Component({
            selector: 'app-profile-section',
            templateUrl: './profile-section.component.html',
            styleUrls: ['./profile-section.component.sass']
        })
    ], ProfileSectionComponent);
    return ProfileSectionComponent;
}());
exports.ProfileSectionComponent = ProfileSectionComponent;
