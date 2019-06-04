import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsPageComponent } from './js-page.component';

describe('JsPageComponent', () => {
  let component: JsPageComponent;
  let fixture: ComponentFixture<JsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
