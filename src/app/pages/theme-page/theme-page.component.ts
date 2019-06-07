import { IGetThemePayload } from './../../shared/interfaces/IGetThemePayload';
import { PopupService } from './../../shared/services/popup.service';
import { selectThemesList } from '../../store/selectors/themes.selector';
import { GetThemes, GetTheme } from '../../store/actions/themes.action';
import { IAppState } from '../../store/states/app.state';
import { Component, OnInit, Input } from '@angular/core';
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

  @Input() icon: string;
  @Input() themeName: string;
  @Input() pageName: string;

  constructor(
    private dialog: MatDialog,
    private store: Store<IAppState>,
    private popupService: PopupService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new GetThemes(this.themeName));
  }

  onCreteTheme(): void {
    const popup = this.popupService.createPopup();
    this.dialog.open(PopupWindowComponent, popup);
  }

  onSelectTheme(themeId): void {
    const themeInfo: IGetThemePayload = {
      id: themeId,
      themeName: this.themeName,
      route: this.pageName
    };

    this.store.dispatch(new GetTheme(themeInfo));
  }
}
