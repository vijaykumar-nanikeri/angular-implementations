import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { VehicleService } from '../../../vehicle.service';

@Component({
  selector: 'app-crv',
  templateUrl: './crv.component.html',
  styleUrls: ['./crv.component.scss']
})
export class CrvComponent implements OnInit, AfterViewChecked {
  @ViewChild('cardEl') cardEl!: ElementRef;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.vehicleService.highlight(this.cardEl);
  }

}
