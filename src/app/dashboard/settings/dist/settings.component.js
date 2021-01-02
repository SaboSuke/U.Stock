"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SettingsComponent = void 0;
var core_1 = require("@angular/core");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(formBuilder, _site) {
        this.formBuilder = formBuilder;
        this._site = _site;
        this.profileform = this.formBuilder.group({
            name: 'susan',
            last_name: 'lily',
            email: 'susan.lily@gmail.com',
            address: 'California los angelos',
            password: '123'
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.UpdateProfile = function (event, data) {
        //event.preventDefault();
        //this.profileform.reset();
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.sass']
        })
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
