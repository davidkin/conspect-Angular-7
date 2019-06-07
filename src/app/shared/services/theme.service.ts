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

  getAllThemes(): Observable<ITheme[]> {
    return this.database.collection<ITheme>('themes').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ITheme;
        const id = a.payload.doc.id;

        return { id, ...data };
      }))
    );
  }

  addNewTheme(newTheme: ITheme): void {
    this.database.collection<ITheme>('themes').add(newTheme);
  }

  updateTheme(id: string, data: ITheme): void {
    this.database.doc(`themes/${id}`).update(data);
  }

  getThemeById(uid: string): Observable<ITheme[]> {
    return this.database.collection<ITheme>('themes').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ITheme;
        const id = a.payload.doc.id;

        if (uid === id) {
          return { id, ...data };
        }

      }))
    );
  }

  getIdOfThemes(): Observable<string[]> {
    return this.database.collection<ITheme>('themes').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const id = a.payload.doc.id;

        return id;
      }))
    );
  }
}
