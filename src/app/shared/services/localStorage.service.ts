import { Injectable } from '@angular/core';
import { ITheme } from '../interfaces/ITheme';

@Injectable()
export class LocalStorageService {
  themes: ITheme[] = [];

  constructor() {}

  setThemeInLocalStorage(data) {
    this.themes.push(data);
  }

  getCurrentThemes() {
    return this.themes;
  }
}
