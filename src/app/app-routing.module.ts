import { JsThemesComponent } from './pages/js-page/js-theme/js-themes.component';
import { JsPageComponent } from './pages/js-page/js-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/js', pathMatch: 'full' },
  { path: 'js', component: JsPageComponent },
  { path: 'js/:id', component: JsThemesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
