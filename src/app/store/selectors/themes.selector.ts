import { IThemesState } from './../states/themes.state';
import { IAppState } from './../states/app.state';
import { createSelector } from '@ngrx/store';

const selectThemes = (state: IAppState) => state.themes;

export const selectThemesList = createSelector(
  selectThemes,
  (state: IThemesState) => state.themes
);
