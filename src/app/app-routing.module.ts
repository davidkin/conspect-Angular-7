import { AngularThemeComponent } from './pages/angular-page/angular-theme/angular-theme.component';
import { AngularPageComponent } from './pages/angular-page/angular-page.component';
import { ThemeComponent } from './pages/theme-page/theme/theme.component';
import { ThemePageComponent } from './pages/theme-page/theme-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/js', pathMatch: 'full' },

  { path: 'js', component: ThemePageComponent },
  { path: 'js/:id', component: ThemeComponent },

  { path: 'angular', component: AngularPageComponent },
  { path: 'angular/:id', component: AngularThemeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
