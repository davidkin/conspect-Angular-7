import { JsThemeComponent } from './pages/js-page/js-theme/js-theme.component';
import { JsPageComponent } from './pages/js-page/js-page.component';
import { AngularThemeComponent } from './pages/angular-page/angular-theme/angular-theme.component';
import { AngularPageComponent } from './pages/angular-page/angular-page.component';
import { ThemeComponent } from './pages/theme-page/theme/theme.component';
import { ThemePageComponent } from './pages/theme-page/theme-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NodeJsPageComponent } from './pages/node-js-page/node-js-page.component';
import { NodeJsThemeComponent } from './pages/node-js-page/node-js-theme/node-js-theme.component';
import { ProgrammingPageComponent } from './pages/programming-page/programming-page.component';
import { ProgrammingThemeComponent } from './pages/programming-page/programming-theme/programming-theme.component';

const routes: Routes = [
  { path: '', redirectTo: '/js', pathMatch: 'full' },

  { path: 'test', component: ThemePageComponent },
  { path: 'test/:id', component: ThemeComponent },

  { path: 'js', component: JsPageComponent },
  { path: 'js/:id', component: JsThemeComponent },

  { path: 'angular', component: AngularPageComponent },
  { path: 'angular/:id', component: AngularThemeComponent },

  { path: 'nodeJs', component: NodeJsPageComponent },
  { path: 'nodeJs/:id', component: NodeJsThemeComponent },

  { path: 'programming', component: ProgrammingPageComponent },
  { path: 'programming/:id', component: ProgrammingThemeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
