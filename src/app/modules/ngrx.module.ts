import { ThemesEffects } from '../store/effects/themes.effect';
import { NgModule } from '@angular/core';
import { appReducers } from 'src/app/store/reducers/app.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ThemesEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router'})
  ],
  exports: []
})
export class NgrxModule { }
