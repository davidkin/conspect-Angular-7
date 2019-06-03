import { Component, OnInit, DoCheck } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PopupWindowComponent } from '../components/popup-theme-window/popup-window.component';
import { LocalStorageService } from '../shared/services/localStorage.service';

@Component({
  selector: 'app-js-page',
  templateUrl: './js-page.component.html',
  styleUrls: ['./js-page.component.scss'],
})
export class JsPageComponent implements OnInit, DoCheck {

  public themes: any[];

  constructor(
    private dialog: MatDialog,
    private localStorage: LocalStorageService,
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.themes = this.localStorage.getCurrentThemes();
  }

  onCreteTheme() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    this.dialog.open(PopupWindowComponent, dialogConfig);
  }
}
