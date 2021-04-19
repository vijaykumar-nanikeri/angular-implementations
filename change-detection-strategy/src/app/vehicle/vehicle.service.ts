import { Injectable, ElementRef, NgZone } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicleColors$ = new Subject();

  constructor(private zone: NgZone) { }

  public highlight(cardEl: ElementRef): void {
    this.zone.runOutsideAngular(() => {
      cardEl.nativeElement.classList.add('highlight');
      setTimeout(() => {
        cardEl.nativeElement.classList.remove('highlight');
      }, 1000);
    });
  }
}
