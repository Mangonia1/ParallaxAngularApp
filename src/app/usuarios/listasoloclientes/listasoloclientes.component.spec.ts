import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasoloclientesComponent } from './listasoloclientes.component';

describe('ListasoloclientesComponent', () => {
  let component: ListasoloclientesComponent;
  let fixture: ComponentFixture<ListasoloclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasoloclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasoloclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
