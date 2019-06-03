import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './shared/modules/material.module';

import { MenuComponent } from './components/menu/menu.component';
import { JsPageComponent } from './js-page/js-page.component';
import { PopupWindowComponent } from './components/popup-theme-window/popup-window.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from './shared/services/localStorage.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    JsPageComponent,
    PopupWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent],
  entryComponents: [PopupWindowComponent]
})
export class AppModule { }
