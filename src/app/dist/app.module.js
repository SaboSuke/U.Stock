"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = exports.routes = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var sidebar_component_1 = require("./dashboard/sidebar/sidebar.component");
var topbar_component_1 = require("./dashboard/topbar/topbar.component");
//import { StatisticsComponent } from './dashboard/statistics/statistics.component';
var product_stats_component_1 = require("./dashboard/product-stats/product-stats.component");
var profile_section_component_1 = require("./dashboard/profile-section/profile-section.component");
var last_product_component_1 = require("./dashboard/last-product/last-product.component");
var chatbot_component_1 = require("./chatbot/chatbot.component");
var login_component_1 = require("./login/login.component");
var site_service_1 = require("./services/site.service");
var auth_service_1 = require("./services/auth.service");
var animations_1 = require("@angular/platform-browser/animations");
var statistics_component_1 = require("./dashboard/statistics/statistics.component");
var product_list_component_1 = require("./dashboard/product-list/product-list.component");
var edit_product_component_1 = require("./dashboard/edit-product/edit-product.component");
var settings_component_1 = require("./dashboard/settings/settings.component");
var all_component_1 = require("./dashboard/product-list/all/all.component");
var in_stock_component_1 = require("./dashboard/product-list/in-stock/in-stock.component");
var out_of_stock_component_1 = require("./dashboard/product-list/out-of-stock/out-of-stock.component");
var low_on_stock_component_1 = require("./dashboard/product-list/low-on-stock/low-on-stock.component");
var product_view_component_1 = require("./dashboard/product-view/product-view.component");
var overview_component_1 = require("./dashboard/product-view/overview/overview.component");
var edit_component_1 = require("./dashboard/product-view/edit/edit.component");
var other_information_component_1 = require("./dashboard/product-view/other-information/other-information.component");
exports.routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent, pathMatch: 'full' },
    { path: 'dashboard/home', component: dashboard_component_1.DashboardComponent },
    {
        path: 'dashboard/list',
        component: product_list_component_1.ProductListComponent
    },
    { path: 'dashboard/list/all', component: all_component_1.AllComponent },
    { path: 'dashboard/list/in-stock', component: in_stock_component_1.InStockComponent },
    { path: 'low-on-stock', component: low_on_stock_component_1.LowOnStockComponent },
    { path: 'out-of-stock', component: out_of_stock_component_1.OutOfStockComponent },
    { path: 'dashboard/edit', component: edit_product_component_1.EditProductComponent },
    { path: 'dashboard/product/:id/overview', component: product_view_component_1.ProductViewComponent },
    { path: 'dashboard/settings', component: settings_component_1.SettingsComponent },
    { path: 'dashboard/product/:id', component: product_list_component_1.ProductListComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                sidebar_component_1.SidebarComponent,
                topbar_component_1.TopbarComponent,
                statistics_component_1.StatisticsComponent,
                product_stats_component_1.ProductStatsComponent,
                profile_section_component_1.ProfileSectionComponent,
                last_product_component_1.LastProductComponent,
                chatbot_component_1.ChatbotComponent,
                login_component_1.LoginComponent,
                statistics_component_1.StatisticsComponent,
                product_list_component_1.ProductListComponent,
                edit_product_component_1.EditProductComponent,
                settings_component_1.SettingsComponent,
                all_component_1.AllComponent,
                in_stock_component_1.InStockComponent,
                out_of_stock_component_1.OutOfStockComponent,
                low_on_stock_component_1.LowOnStockComponent,
                product_view_component_1.ProductViewComponent,
                overview_component_1.OverviewComponent,
                edit_component_1.EditComponent,
                other_information_component_1.OtherInformationComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(exports.routes),
                animations_1.BrowserAnimationsModule
            ],
            providers: [
                forms_1.FormBuilder,
                site_service_1.SiteService,
                auth_service_1.AuthService
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [
                core_1.CUSTOM_ELEMENTS_SCHEMA,
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
