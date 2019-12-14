import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreartipocuesComponent } from './creartipocues.component';

describe('CreartipocuesComponent', () => {
  let component: CreartipocuesComponent;
  let fixture: ComponentFixture<CreartipocuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreartipocuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreartipocuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
