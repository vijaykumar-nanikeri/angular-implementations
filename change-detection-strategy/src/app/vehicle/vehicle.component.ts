import { Component, OnInit, AfterViewChecked, NgZone, ViewChild, ElementRef } from '@angular/core';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit, AfterViewChecked {
  @ViewChild('cardEl') cardEl!: ElementRef;
  @ViewChild('spinnerBorderEl') spinnerBorderEl!: ElementRef;
  @ViewChild('addVehicleColorEl') addVehicleColorEl!: ElementRef;

  vehicleColors = ['Red', 'Green', 'Yellow'];
  
  constructor(private zone: NgZone, private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.vehicleService.highlight(this.cardEl);
  }

  public refresh(): void {
    this.zone.runOutsideAngular(() => {
      this.spinnerBorderEl.nativeElement.classList.remove('d-none');
      setTimeout(() => {
        this.spinnerBorderEl.nativeElement.classList.add('d-none');
        location.reload();
      }, 1000);
    });
  }

  public addVehicleColor(): void {
    if (this.addVehicleColorEl.nativeElement.value) {
      this.vehicleColors.push(this.addVehicleColorEl.nativeElement.value);
      this.addVehicleColorEl.nativeElement.value = '';

      this.vehicleService.vehicleColors$.next(this.vehicleColors);
    }
  }

  public detection(): void {
    // does nothing...
  }

}
