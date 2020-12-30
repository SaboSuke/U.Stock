import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'dashboard/home', component: DashboardComponent},
  { path: 'dashboard/list', component: ProductListComponent},
  { path: 'dashboard/edit', component: EditProductComponent},
  { path: 'dashboard/settings', component: SettingsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    //StatisticsComponent,
    ProductStatsComponent,
    ProfileSectionComponent,
    LastProductComponent,
    ChatbotComponent,
    LoginComponent,
    StatisticsComponent,
    ProductListComponent,
    EditProductComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
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
