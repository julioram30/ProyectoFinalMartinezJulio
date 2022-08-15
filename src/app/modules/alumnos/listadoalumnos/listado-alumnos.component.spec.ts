import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAlumnosComponent } from "./ListadoAlumnosComponent";

describe('ListadoAlumnosComponent', () => {
  let component: ListadoAlumnosComponent;
  let fixture: ComponentFixture<ListadoAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAlumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
