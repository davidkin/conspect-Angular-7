import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  imports: [
    BrowserAnimationsModule,

    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
