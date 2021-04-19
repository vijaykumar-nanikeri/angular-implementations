import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmadaComponent } from './armada.component';

describe('ArmadaComponent', () => {
  let component: ArmadaComponent;
  let fixture: ComponentFixture<ArmadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
