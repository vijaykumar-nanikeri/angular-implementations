import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NissanSedanComponent } from './nissan-sedan.component';

describe('NissanSedanComponent', () => {
  let component: NissanSedanComponent;
  let fixture: ComponentFixture<NissanSedanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NissanSedanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NissanSedanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
