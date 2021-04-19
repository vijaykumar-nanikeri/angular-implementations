import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { VehicleService } from '../../vehicle.service';

@Component({
  selector: 'app-honda-suv',
  templateUrl: './honda-suv.component.html',
  styleUrls: ['./honda-suv.component.scss']
})
export class HondaSuvComponent implements OnInit, AfterViewChecked {
  @ViewChild('cardEl') cardEl!: ElementRef;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.vehicleService.highlight(this.cardEl);
  }

}
