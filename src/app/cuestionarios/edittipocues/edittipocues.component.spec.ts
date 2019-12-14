import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittipocuesComponent } from './edittipocues.component';

describe('EdittipocuesComponent', () => {
  let component: EdittipocuesComponent;
  let fixture: ComponentFixture<EdittipocuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittipocuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittipocuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
