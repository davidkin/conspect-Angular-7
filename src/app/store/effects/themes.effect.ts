import { ITheme } from 'src/app/shared/interfaces/ITheme';
import { ThemeService } from './../../shared/services/theme.service';
import { GetThemes, EThemesActions, GetThemesSuccess } from './../actions/themes.action';
import { IAppState } from './../states/app.state';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class ThemesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<IAppState>,
    private themeService: ThemeService
  ) {}

  @Effect()
  getThemes$ = this.actions$.pipe(
    ofType<GetThemes>(EThemesActions.GetThemes),
    switchMap(() => this.themeService.getAllThemes()),
    switchMap((theme: ITheme[]) => of(new GetThemesSuccess(theme)))
  );
}
