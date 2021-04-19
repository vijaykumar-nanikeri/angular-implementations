import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { VehicleService } from '../../../vehicle.service';

@Component({
  selector: 'app-civic',
  templateUrl: './civic.component.html',
  styleUrls: ['./civic.component.scss']
})
export class CivicComponent implements OnInit, AfterViewChecked {
  @ViewChild('cardEl') cardEl!: ElementRef;
  
  vehicleColors: any

  constructor(private vehicleService: VehicleService, private cdr: ChangeDetectorRef) {
    // this.vehicleService.vehicleColors$.subscribe(vehicleColors => {
    //   // console.log('Civic: ', vehicleColors);
    //   this.vehicleColors = vehicleColors;
    //   // this.cdr.detectChanges();
    //   // this.cdr.markForCheck();
    // });
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.vehicleService.highlight(this.cardEl);
  }

}
