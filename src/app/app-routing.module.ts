import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoriesComponent } from './pages/accesories/accesories.component';
import { HomeComponent } from './pages/home/home.component';
import { JewelryComponent } from './pages/jewelry/jewelry.component';
import { MenComponent } from './pages/men/men.component';
import { PursesComponent } from './pages/purses/purses.component';
import { WomenComponent } from './pages/women/women.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'damas',
    pathMatch: 'full',
    component: WomenComponent,
  },
  {
    path: 'caballeros',
    pathMatch: 'full',
    component: MenComponent,
  },
  {
    path: 'joyeria',
    pathMatch: 'full',
    component: JewelryComponent,
  },
  {
    path: 'accesorios',
    pathMatch: 'full',
    component: AccesoriesComponent,
  },
  {
    path: 'bolsos',
    pathMatch: 'full',
    component: PursesComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
