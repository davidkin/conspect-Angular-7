import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsThemeComponent } from './js-theme.component';

describe('JsThemeComponent', () => {
  let component: JsThemeComponent;
  let fixture: ComponentFixture<JsThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
