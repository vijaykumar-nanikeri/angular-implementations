import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HondaSedanComponent } from './honda-sedan.component';

describe('HondaSedanComponent', () => {
  let component: HondaSedanComponent;
  let fixture: ComponentFixture<HondaSedanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HondaSedanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HondaSedanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
