import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularThemeComponent } from './angular-theme.component';

describe('AngularThemeComponent', () => {
  let component: AngularThemeComponent;
  let fixture: ComponentFixture<AngularThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
