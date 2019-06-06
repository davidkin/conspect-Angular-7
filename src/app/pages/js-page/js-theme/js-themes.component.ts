import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAppState } from 'src/app/store/states/app.state';
import { selectSelectedTheme } from 'src/app/store/selectors/themes.selector';
import { GetTheme } from 'src/app/store/actions/themes.action';

@Component({
  selector: 'app-js-themes',
  templateUrl: './js-themes.component.html',
  styleUrls: ['./js-themes.component.scss']
})
export class JsThemesComponent implements OnInit {
  public themes = this.store.pipe(select(selectSelectedTheme));

  constructor(
    private route: ActivatedRoute,
    private store: Store<IAppState>,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.store.dispatch(new GetTheme(id));
  }

}
