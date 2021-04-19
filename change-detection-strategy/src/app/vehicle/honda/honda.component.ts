import { Component, OnInit, AfterViewInit, AfterViewChecked, Input, ViewChild, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-honda',
  templateUrl: './honda.component.html',
  styleUrls: ['./honda.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HondaComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @Input() vehicleColors: any;
  @ViewChild('cardEl') cardEl!: ElementRef;

  constructor(private cdr: ChangeDetectorRef, private vehicleService: VehicleService, private zone: NgZone) { }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    // this.cdr.detach();
  }
  
  ngAfterViewChecked(): void {
    this.vehicleService.highlight(this.cardEl);

    // this.zone.runOutsideAngular(() => {
    //   setTimeout(() => {
    //     this.cdr.reattach();
    //   }, 5000);
    // });

    // this.zone.runOutsideAngular(() => {
    //   setTimeout(() => {
    //     this.cdr.detectChanges();
    //     // this.cdr.markForCheck();
    //   }, 5000);
    // });
  }

}
