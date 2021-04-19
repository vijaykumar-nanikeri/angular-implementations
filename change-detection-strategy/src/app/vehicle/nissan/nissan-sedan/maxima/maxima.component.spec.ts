import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximaComponent } from './maxima.component';

describe('MaximaComponent', () => {
  let component: MaximaComponent;
  let fixture: ComponentFixture<MaximaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaximaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaximaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
