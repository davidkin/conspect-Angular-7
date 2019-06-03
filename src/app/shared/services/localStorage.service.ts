import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  themes: any[] = [];

  constructor() {}

  setThemeInLocalStorage(data) {
    this.themes.push(data);
  }

  getCurrentThemes() {
    return this.themes;
  }
}
