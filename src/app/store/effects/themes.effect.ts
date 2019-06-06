import { ITheme } from 'src/app/shared/interfaces/ITheme';
import { ThemeService } from './../../shared/services/theme.service';
import { GetThemes, EThemesActions, GetThemesSuccess, GetTheme, GetThemeSuccess } from './../actions/themes.action';
import { IAppState } from './../states/app.state';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class ThemesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<IAppState>,
    private themeService: ThemeService,
    private routes: Router
  ) {}

  @Effect()
  getThemes$ = this.actions$.pipe(
    ofType<GetThemes>(EThemesActions.GetThemes),
    switchMap(() => this.themeService.getAllThemes()),
    switchMap((theme: ITheme[]) => of(new GetThemesSuccess(theme)))
  );

  @Effect()
  getTheme$ = this.actions$.pipe(
    ofType<GetTheme>(EThemesActions.GetTheme),
    map(action => action.payload),
    switchMap(id => {
      this.routes.navigate(['/js/', id]);
      return this.themeService.getThemeById(id);
    }),
    switchMap((theme: ITheme[]) => of(new GetThemeSuccess(theme)))
  );
}
