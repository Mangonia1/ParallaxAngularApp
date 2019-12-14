import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcuesmodComponent } from './editcuesmod.component';

describe('EditcuesmodComponent', () => {
  let component: EditcuesmodComponent;
  let fixture: ComponentFixture<EditcuesmodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcuesmodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcuesmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
