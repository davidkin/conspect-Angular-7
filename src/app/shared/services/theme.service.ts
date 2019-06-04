import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ITheme } from '../interfaces/ITheme';

@Injectable()
export class ThemeService {
  public themes: Observable<ITheme[]>;
  private themesCollection: AngularFirestoreCollection<ITheme>;

  constructor(
    private database: AngularFirestore,
  ) {
    this.themesCollection = this.database.collection<ITheme>('themes');
    this.themes = this.themesCollection.valueChanges();
  }

  getAllThemes(): Observable<ITheme[]> {
    return this.themes;
  }

  addNewTheme(newTheme: ITheme): void {
    this.themesCollection.add(newTheme);
  }
}
