import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactThemeComponent } from './react-theme.component';

describe('ReactThemeComponent', () => {
  let component: ReactThemeComponent;
  let fixture: ComponentFixture<ReactThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
