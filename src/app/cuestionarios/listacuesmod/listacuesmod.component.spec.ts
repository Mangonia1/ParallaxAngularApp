import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacuesmodComponent } from './listacuesmod.component';

describe('ListacuesmodComponent', () => {
  let component: ListacuesmodComponent;
  let fixture: ComponentFixture<ListacuesmodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacuesmodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacuesmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
