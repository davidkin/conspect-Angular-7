import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeJsThemeComponent } from './node-js-theme.component';

describe('NodeJsThemeComponent', () => {
  let component: NodeJsThemeComponent;
  let fixture: ComponentFixture<NodeJsThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeJsThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeJsThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
