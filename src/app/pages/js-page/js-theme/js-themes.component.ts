import { ITheme } from 'src/app/shared/interfaces/ITheme';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-js-themes',
  templateUrl: './js-themes.component.html',
  styleUrls: ['./js-themes.component.scss']
})
export class JsThemesComponent implements OnInit {
  themes: Observable<ITheme[]>;

  constructor(
    private route: ActivatedRoute,
    private themeService: ThemeService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.themes = this.themeService.getThemeById(id);
  }

}
