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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ThemePageComponent,
    PopupWindowComponent,
    ThemeComponent,
    AngularPageComponent,
    AngularThemeComponent,
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
