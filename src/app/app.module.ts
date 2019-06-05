import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './modules/material.module';

import { MenuComponent } from './components/menu/menu.component';
import { JsPageComponent } from './pages/js-page/js-page.component';
import { PopupWindowComponent } from './components/popup-theme-window/popup-window.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ThemeService } from './shared/services/theme.service';
import { NgrxModule } from './modules/ngrx.module';
import { JsThemesComponent } from './pages/js-page/js-themes/js-themes.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    JsPageComponent,
    PopupWindowComponent,
    JsThemesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgrxModule
  ],
  providers: [ThemeService] ,
  bootstrap: [AppComponent],
  entryComponents: [PopupWindowComponent]
})
export class AppModule { }
