import { IThemesState, initialThemesState } from './themes.state';
import { RouterReducerState } from '@ngrx/router-store';

export interface IAppState {
  router?: RouterReducerState;
  themes: IThemesState;
}

export const initialAppState: IAppState = {
  themes: initialThemesState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
