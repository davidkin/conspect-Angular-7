import { selectThemesList } from './../../store/selectors/themes.selector';
import { GetThemes } from './../../store/actions/themes.action';
import { IAppState } from './../../store/states/app.state';
import { ITheme } from './../../shared/interfaces/ITheme';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PopupWindowComponent } from '../../components/popup-theme-window/popup-window.component';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-js-page',
  templateUrl: './js-page.component.html',
  styleUrls: ['./js-page.component.scss'],
})
export class JsPageComponent implements OnInit {
  public themes = this.store.pipe(select(selectThemesList));

  constructor(
    private dialog: MatDialog,
    private themeService: ThemeService,
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
}
