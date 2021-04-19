import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltimaComponent } from './altima.component';

describe('AltimaComponent', () => {
  let component: AltimaComponent;
  let fixture: ComponentFixture<AltimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
