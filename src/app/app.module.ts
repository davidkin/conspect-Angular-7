import { PopupService } from './shared/services/popup.service';
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
import { ThemePageComponent } from './pages/theme-page/theme-page.component';
import { PopupWindowComponent } from './components/popup-theme-window/popup-window.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ThemeService } from './shared/services/theme.service';
import { NgrxModule } from './modules/ngrx.module';
import { ThemeComponent } from './pages/theme-page/theme/theme.component';
import { AngularPageComponent } from './pages/angular-page/angular-page.component';
import { AngularThemeComponent } from './pages/angular-page/angular-theme/angular-theme.component';
import { JsPageComponent } from './pages/js-page/js-page.component';
import { JsThemeComponent } from './pages/js-page/js-theme/js-theme.component';
import { NodeJsPageComponent } from './pages/node-js-page/node-js-page.component';
import { NodeJsThemeComponent } from './pages/node-js-page/node-js-theme/node-js-theme.component';
import { ProgrammingPageComponent } from './pages/programming-page/programming-page.component';
import { ProgrammingThemeComponent } from './pages/programming-page/programming-theme/programming-theme.component';
import { ReactPageComponent } from './pages/react-page/react-page.component';
import { ReactThemeComponent } from './pages/react-page/react-theme/react-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ThemePageComponent,
    PopupWindowComponent,
    ThemeComponent,
    AngularPageComponent,
    AngularThemeComponent,
    JsPageComponent,
    JsThemeComponent,
    NodeJsPageComponent,
    NodeJsThemeComponent,
    ProgrammingPageComponent,
    ProgrammingThemeComponent,
    ReactPageComponent,
    ReactThemeComponent,
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
  providers: [ThemeService, PopupService] ,
  bootstrap: [AppComponent],
  entryComponents: [PopupWindowComponent]
})
export class AppModule { }
