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
var sweetalert2_1 = require("sweetalert2");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(formBuilder, _site, _storage) {
        this.formBuilder = formBuilder;
        this._site = _site;
        this._storage = _storage;
        this.name = "";
        this.address = "";
        this.last_name = "";
        this.email = "";
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user_id = this._storage.getItem("user_id");
        this._site.getUserDetails(user_id).subscribe(function (data) {
            _this.name = data.name;
            _this.address = data.address;
            _this.last_name = data.last_name;
            _this.email = data.email;
            _this.profileform = _this.formBuilder.group({
                name: _this.name,
                last_name: _this.last_name,
                email: _this.email,
                address: _this.address
            });
        }, function (error) { return console.log('error trying to get user details'); });
    };
    SettingsComponent.prototype.UpdateProfile = function (event, data) {
        var _this = this;
        var swalWithBootstrapButtons = sweetalert2_1["default"].mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You want to update your profile details?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, udpate!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then(function (result) {
            if (result.isConfirmed) {
                _this._site.updateUserProfile(data.name, data.last_name, data.email, data.address).subscribe(function (data) {
                    if (data.success) {
                        swalWithBootstrapButtons.fire('Updated!', 'User updated successfully!', 'success');
                    }
                    else
                        console.log("There has been an error updating your profile!");
                }, function (error) { return console.log(error); });
            }
            else if (
            /* Read more about handling dismissals below */
            result.dismiss === sweetalert2_1["default"].DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelled', 'Profile update has been canceled!', 'error');
            }
        });
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
