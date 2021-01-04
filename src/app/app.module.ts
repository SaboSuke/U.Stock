import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { TopbarComponent } from './dashboard/topbar/topbar.component';
//import { StatisticsComponent } from './dashboard/statistics/statistics.component';
import { ProductStatsComponent } from './dashboard/product-stats/product-stats.component';
import { ProfileSectionComponent } from './dashboard/profile-section/profile-section.component';
import { LastProductComponent } from './dashboard/last-product/last-product.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { LoginComponent } from './login/login.component';
import { SiteService } from './services/site.service';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatisticsComponent } from './dashboard/statistics/statistics.component';
import { ProductListComponent } from './dashboard/product-list/product-list.component';
import { EditProductComponent } from './dashboard/edit-product/edit-product.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { AllComponent } from './dashboard/product-list/all/all.component';
import { InStockComponent } from './dashboard/product-list/in-stock/in-stock.component';
import { OutOfStockComponent } from './dashboard/product-list/out-of-stock/out-of-stock.component';
import { LowOnStockComponent } from './dashboard/product-list/low-on-stock/low-on-stock.component';
import { ProductViewComponent } from './dashboard/product-view/product-view.component';
import { OverviewComponent } from './dashboard/product-view/overview/overview.component';
import { EditComponent } from './dashboard/product-view/edit/edit.component';
import { OtherInformationComponent } from './dashboard/product-view/other-information/other-information.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { AddProductComponent } from './dashboard/add-product/add-product.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'dashboard/home', component: DashboardComponent},
  { 
    path: 'dashboard/list', 
    component: ProductListComponent,
  },
  { path: 'dashboard/list/all', component: AllComponent },
  { path: 'dashboard/list/in-stock', component: InStockComponent },
  { path: 'low-on-stock', component: LowOnStockComponent },
  { path: 'out-of-stock', component: OutOfStockComponent },
  { path: 'dashboard/edit', component: EditProductComponent},
  { path: 'dashboard/product/:id/overview', component: ProductViewComponent},
  { path: 'dashboard/product/:id', component: ProductListComponent},
  { path: 'dashboard/add-product', component: AddProductComponent},
  { path: 'dashboard/settings', component: SettingsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    StatisticsComponent,
    ProductStatsComponent,
    ProfileSectionComponent,
    LastProductComponent,
    ChatbotComponent,
    LoginComponent,
    StatisticsComponent,
    ProductListComponent,
    EditProductComponent,
    SettingsComponent,
    AllComponent,
    InStockComponent,
    OutOfStockComponent,
    LowOnStockComponent,
    ProductViewComponent,
    OverviewComponent,
    EditComponent,
    OtherInformationComponent,
    ChartjsComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule,
    HighchartsChartModule,
    ChartModule,
    CarouselModule,
    NgxSpinnerModule,
  ],
  providers: [
    FormBuilder,
    SiteService,
    AuthService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule { }
