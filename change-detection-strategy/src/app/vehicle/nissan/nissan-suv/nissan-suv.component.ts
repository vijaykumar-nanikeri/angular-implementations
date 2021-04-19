import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { VehicleService } from '../../vehicle.service';

@Component({
  selector: 'app-nissan-suv',
  templateUrl: './nissan-suv.component.html',
  styleUrls: ['./nissan-suv.component.scss']
})
export class NissanSuvComponent implements OnInit, AfterViewChecked {
  @ViewChild('cardEl') cardEl!: ElementRef;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.vehicleService.highlight(this.cardEl);
  }

}
