import { ThemeService } from './../../shared/services/theme.service';
import { IGetThemePayload } from './../../shared/interfaces/IThemePayloads';
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
    private popupService: PopupService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new GetThemes(this.themeName));
  }

  onCreteTheme(): void {
    const popup = this.popupService.createPopup();
    this.dialog.open(PopupWindowComponent, popup);
  }

  onSelectTheme(themeId, event): void {
    const themeInfo: IGetThemePayload = {
      id: themeId,
      themeName: this.themeName,
      route: this.pageName
    };

    if (event.target.tagName === 'MAT-ICON') {
      this.themeService.deleteTheme(themeId, this.themeName);
      return;
    }

    this.store.dispatch(new GetTheme(themeInfo));
  }
}
