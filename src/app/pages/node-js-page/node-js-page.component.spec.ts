import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeJsPageComponent } from './node-js-page.component';

describe('NodeJsPageComponent', () => {
  let component: NodeJsPageComponent;
  let fixture: ComponentFixture<NodeJsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeJsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeJsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
