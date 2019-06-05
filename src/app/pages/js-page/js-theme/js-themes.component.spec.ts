import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsThemesComponent } from './js-themes.component';

describe('JsThemesComponent', () => {
  let component: JsThemesComponent;
  let fixture: ComponentFixture<JsThemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsThemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
