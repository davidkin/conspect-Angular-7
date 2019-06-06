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
  ) {
    this.themesCollection = this.database.collection<ITheme>('themes');
  }

  getAllThemes(): Observable<ITheme[]> {
    return this.themesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ITheme;
        const id = a.payload.doc.id;

        return { id, ...data };
      }))
    );
  }

  addNewTheme(newTheme: ITheme): void {
    this.themesCollection.add(newTheme);
  }

  getThemeById(uid: string): Observable<ITheme[]> {
    return this.themesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ITheme;
        const id = a.payload.doc.id;

        if (uid === id) {
          return data;
        }

      }))
    );
  }

  getIdOfThemes(): Observable<string[]> {
    return this.themesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const id = a.payload.doc.id;

        return id;
      }))
    );
  }
}
