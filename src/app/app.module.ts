import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { TopbarComponent } from './dashboard/topbar/topbar.component';
import { StatisticsComponent } from './dashboard/statistics/statistics.component';
import { ProductStatsComponent } from './dashboard/product-stats/product-stats.component';
import { ProfileSectionComponent } from './dashboard/profile-section/profile-section.component';
import { LastProductComponent } from './dashboard/last-product/last-product.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule { }
