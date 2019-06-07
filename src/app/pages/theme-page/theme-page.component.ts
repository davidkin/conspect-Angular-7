import { selectThemesList } from '../../store/selectors/themes.selector';
import { GetThemes, GetTheme } from '../../store/actions/themes.action';
import { IAppState } from '../../store/states/app.state';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PopupWindowComponent } from '../../components/popup-theme-window/popup-window.component';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theme-page',
  templateUrl: './theme-page.component.html',
  styleUrls: ['./theme-page.component.scss'],
})
export class ThemePageComponent implements OnInit {
  public themes = this.store.pipe(select(selectThemesList));

  constructor(
    private dialog: MatDialog,
    private store: Store<IAppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new GetThemes());
  }

  onCreteTheme() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    this.dialog.open(PopupWindowComponent, dialogConfig);
  }

  onSelectTheme(themeId) {
    this.store.dispatch(new GetTheme(themeId));
  }
}
