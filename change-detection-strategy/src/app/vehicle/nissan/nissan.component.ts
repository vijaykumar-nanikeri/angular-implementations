import { Component, OnInit, AfterViewInit, AfterViewChecked, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-nissan',
  templateUrl: './nissan.component.html',
  styleUrls: ['./nissan.component.scss']
})
export class NissanComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @Input() vehicleColors: any;
  @ViewChild('cardEl') cardEl!: ElementRef;

  constructor(private cdr: ChangeDetectorRef, private vehicleService: VehicleService) { }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.cdr.detach();
  }
  
  ngAfterViewChecked(): void {
    this.vehicleService.highlight(this.cardEl);
  }

}
