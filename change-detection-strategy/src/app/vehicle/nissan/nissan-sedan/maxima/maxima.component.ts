import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { VehicleService } from '../../../vehicle.service';

@Component({
  selector: 'app-maxima',
  templateUrl: './maxima.component.html',
  styleUrls: ['./maxima.component.scss']
})
export class MaximaComponent implements OnInit, AfterViewChecked {
  @ViewChild('cardEl') cardEl!: ElementRef;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.vehicleService.highlight(this.cardEl);
  }

}
