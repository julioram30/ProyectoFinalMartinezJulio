import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidenComponent } from './asiden.component';

describe('AsidenComponent', () => {
  let component: AsidenComponent;
  let fixture: ComponentFixture<AsidenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsidenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
