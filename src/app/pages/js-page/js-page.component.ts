import { selectThemesList } from './../../store/selectors/themes.selector';
import { GetThemes } from './../../store/actions/themes.action';
import { IAppState } from './../../store/states/app.state';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PopupWindowComponent } from '../../components/popup-theme-window/popup-window.component';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-js-page',
  templateUrl: './js-page.component.html',
  styleUrls: ['./js-page.component.scss'],
})
export class JsPageComponent implements OnInit {
  public themes = this.store.pipe(select(selectThemesList));

  constructor(
    private dialog: MatDialog,
    private store: Store<IAppState>,
    private route: Router
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
    this.route.navigate(['/js/', themeId]);
  }
}
