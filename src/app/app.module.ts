import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccesoriesComponent } from './pages/accesories/accesories.component';
import { HomeComponent } from './pages/home/home.component';
import { JewelryComponent } from './pages/jewelry/jewelry.component';
import { MenComponent } from './pages/men/men.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { PursesComponent } from './pages/purses/purses.component';
import { WomenComponent } from './pages/women/women.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WomenComponent,
    MenComponent,
    AccesoriesComponent,
    JewelryComponent,
    PursesComponent,
    PromotionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
