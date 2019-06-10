import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingThemeComponent } from './programming-theme.component';

describe('ProgrammingThemeComponent', () => {
  let component: ProgrammingThemeComponent;
  let fixture: ComponentFixture<ProgrammingThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammingThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
