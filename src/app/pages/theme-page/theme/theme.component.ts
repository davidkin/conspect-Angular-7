import { ThemeService } from '../../../shared/services/theme.service';
import { ITheme } from 'src/app/shared/interfaces/ITheme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAppState } from 'src/app/store/states/app.state';
import { selectSelectedTheme } from 'src/app/store/selectors/themes.selector';
import { GetTheme } from 'src/app/store/actions/themes.action';
import { IGetThemePayload } from 'src/app/shared/interfaces/IGetThemePayload';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  public themes = this.store.pipe(select(selectSelectedTheme));
  public edit = false;
  public theme: ITheme;

  @Input() themeName: string;
  @Input() pageName: string;

  public editForm: FormGroup = this.formBuilder.group({
    id: [''],
    name: [''],
    description: [''],
    info: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<IAppState>,
    private themeService: ThemeService
  ) { }

  get form() {
    return this.editForm.controls;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    const themeInfo: IGetThemePayload = {
      id,
      themeName: this.themeName,
      route: this.pageName
    };

    this.store.dispatch(new GetTheme(themeInfo));

    this.themes.subscribe(theme => {
      if (theme) {
        const currentTheme = theme.filter((v) => !!v)[0];
        this.theme = Object.assign({}, currentTheme);

        this.editForm.controls.id.setValue(currentTheme.id);
        this.editForm.controls.name.setValue(currentTheme.name);
        this.editForm.controls.description.setValue(currentTheme.description);
        this.editForm.controls.info.setValue(currentTheme.info);
      }
    });
  }

  onSubmit(): void {
    this.edit = !this.edit;

    const id = this.editForm.value.id;
    const data = this.editForm.value;

    this.themeService.updateTheme(id, data, this.themeName);
  }

}
