import { map } from 'rxjs/operators';
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
  ) {}

  getAllThemes(themeName: string): Observable<ITheme[]> {
    return this.database.collection<ITheme>(themeName).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ITheme;
        const id = a.payload.doc.id;

        return { id, ...data };
      }))
    );
  }

  addNewTheme(newTheme: ITheme, themeName: string): void {
    this.database.collection<ITheme>(themeName).add(newTheme);
  }

  updateTheme(id: string, data: ITheme, themeName: string) {
    this.database.doc(`${themeName}/${id}`).update(data);
  }

  deleteTheme(id: string, themeName: string) {
    this.database.doc(`${themeName}/${id}`).delete();
  }

  getThemeById(uid: string, themeName: string): Observable<ITheme[]> {
    return this.database.collection<ITheme>(themeName).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ITheme;
        const id = a.payload.doc.id;

        if (uid === id) {
          return { id, ...data };
        }

      }))
    );
  }

  getIdOfThemes(themeName: string): Observable<string[]> {
    return this.database.collection<ITheme>(themeName).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const id = a.payload.doc.id;

        return id;
      }))
    );
  }
}
