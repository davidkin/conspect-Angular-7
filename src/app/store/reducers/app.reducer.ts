import { IAppState } from './../states/app.state';
import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { themesReducers } from './themes.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  themes: themesReducers
};
