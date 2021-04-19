import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { VehicleService } from '../../vehicle.service';

@Component({
  selector: 'app-honda-sedan',
  templateUrl: './honda-sedan.component.html',
  styleUrls: ['./honda-sedan.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HondaSedanComponent implements OnInit, AfterViewChecked {
  @ViewChild('cardEl') cardEl!: ElementRef;

  vehicleColors: any

  constructor(private vehicleService: VehicleService, private cdr: ChangeDetectorRef) {
    // this.vehicleService.vehicleColors$.subscribe(vehicleColors => {
    //   // console.log('Honda Sedan: ', vehicleColors);
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
