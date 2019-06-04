import { ITheme } from './../../shared/interfaces/ITheme';
import { Component, OnInit, DoCheck } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PopupWindowComponent } from '../../components/popup-theme-window/popup-window.component';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-js-page',
  templateUrl: './js-page.component.html',
  styleUrls: ['./js-page.component.scss'],
})
export class JsPageComponent implements OnInit, DoCheck {
  public themes: Observable<ITheme[]>;

  constructor(
    private dialog: MatDialog,
    private database: AngularFirestore
  ) {
  }

  ngOnInit(): void {
    this.themes = this.database.collection<ITheme>('themes').valueChanges();
  }

  ngDoCheck(): void {
  }

  onCreteTheme() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    this.dialog.open(PopupWindowComponent, dialogConfig);
  }
}
