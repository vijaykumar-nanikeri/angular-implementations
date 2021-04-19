import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NissanSuvComponent } from './nissan-suv.component';

describe('NissanSuvComponent', () => {
  let component: NissanSuvComponent;
  let fixture: ComponentFixture<NissanSuvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NissanSuvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NissanSuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
