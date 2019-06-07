import { IGetThemePayload } from './../../shared/interfaces/IGetThemePayload';
import { Action } from '@ngrx/store';
import { ITheme } from 'src/app/shared/interfaces/ITheme';

export enum EThemesActions {
  GetThemes = '[Themes] Get Themes',
  GetThemesSuccess = '[Themes] Get Themes Success',
  GetTheme = '[Theme] Get Theme',
  GetThemeSuccess = '[Themes] Get Theme Success',
}

export class GetThemes implements Action {
  public readonly type = EThemesActions.GetThemes;
  constructor(public payload: string) {}
}

export class GetThemesSuccess implements Action {
  public readonly type = EThemesActions.GetThemesSuccess;
  constructor(public payload: ITheme[]) {}
}

export class GetTheme implements Action {
  public readonly type = EThemesActions.GetTheme;
  constructor(public payload: IGetThemePayload) {}
}

export class GetThemeSuccess implements Action {
  public readonly type = EThemesActions.GetThemeSuccess;
  constructor(public payload: ITheme[]) {}
}

export type ThemesActions = GetThemes | GetThemesSuccess
                           | GetTheme | GetThemeSuccess;
