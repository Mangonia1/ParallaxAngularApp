import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatipocuesComponent } from './listatipocues.component';

describe('ListatipocuesComponent', () => {
  let component: ListatipocuesComponent;
  let fixture: ComponentFixture<ListatipocuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListatipocuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListatipocuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
