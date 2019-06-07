import { JsThemeComponent } from './pages/js-page/js-theme/js-theme.component';
import { JsPageComponent } from './pages/js-page/js-page.component';
import { AngularThemeComponent } from './pages/angular-page/angular-theme/angular-theme.component';
import { AngularPageComponent } from './pages/angular-page/angular-page.component';
import { ThemeComponent } from './pages/theme-page/theme/theme.component';
import { ThemePageComponent } from './pages/theme-page/theme-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full' },

  { path: 'test', component: ThemePageComponent },
  { path: 'test/:id', component: ThemeComponent },

  { path: 'js', component: JsPageComponent },
  { path: 'js/:id', component: JsThemeComponent },

  { path: 'angular', component: AngularPageComponent },
  { path: 'angular/:id', component: AngularThemeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
