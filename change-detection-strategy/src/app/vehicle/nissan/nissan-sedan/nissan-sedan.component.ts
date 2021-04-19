import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { VehicleService } from '../../vehicle.service';

@Component({
  selector: 'app-nissan-sedan',
  templateUrl: './nissan-sedan.component.html',
  styleUrls: ['./nissan-sedan.component.scss']
})
export class NissanSedanComponent implements OnInit, AfterViewChecked {
  @ViewChild('cardEl') cardEl!: ElementRef;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.vehicleService.highlight(this.cardEl);
  }

}
