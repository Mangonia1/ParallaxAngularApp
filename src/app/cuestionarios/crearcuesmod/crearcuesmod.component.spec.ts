import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcuesmodComponent } from './crearcuesmod.component';

describe('CrearcuesmodComponent', () => {
  let component: CrearcuesmodComponent;
  let fixture: ComponentFixture<CrearcuesmodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearcuesmodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearcuesmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
