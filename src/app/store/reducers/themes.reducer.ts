import { IThemesState } from './../states/themes.state';
import { ThemesActions, EThemesActions } from './../actions/themes.action';
import { initialThemesState } from '../states/themes.state';

export function themesReducers(state = initialThemesState, action: ThemesActions ): IThemesState {
  switch (action.type) {
    case EThemesActions.GetThemesSuccess: {
      return {
        ...state,
        themes: action.payload
      };
    }

    default:
      return state;
  }
}
