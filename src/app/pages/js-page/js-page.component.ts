import { ITheme } from './../../shared/interfaces/ITheme';
import { Component, OnInit, DoCheck } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PopupWindowComponent } from '../../components/popup-theme-window/popup-window.component';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-js-page',
  templateUrl: './js-page.component.html',
  styleUrls: ['./js-page.component.scss'],
})
export class JsPageComponent implements OnInit, DoCheck {
  public themes: Observable<ITheme[]>;

  constructor(
    private dialog: MatDialog,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themes = this.themeService.getAllThemes();
  }

  ngDoCheck(): void {
  }

  onCreteTheme() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    this.dialog.open(PopupWindowComponent, dialogConfig);
  }
}
