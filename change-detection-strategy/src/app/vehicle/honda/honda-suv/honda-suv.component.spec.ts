import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HondaSuvComponent } from './honda-suv.component';

describe('HondaSuvComponent', () => {
  let component: HondaSuvComponent;
  let fixture: ComponentFixture<HondaSuvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HondaSuvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HondaSuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
