import { Action } from '@ngrx/store';
import { ITheme } from 'src/app/shared/interfaces/ITheme';

export enum EThemesActions {
  GetThemes = '[Themes] Get Themes',
  GetThemesSuccess = '[Themes] Get Themes Success'
}

export class GetThemes implements Action {
  public readonly type = EThemesActions.GetThemes;
}

export class GetThemesSuccess implements Action {
  public readonly type = EThemesActions.GetThemesSuccess;
  constructor(public payload: ITheme[]) {}
}

export type ThemesActions = GetThemes | GetThemesSuccess;
