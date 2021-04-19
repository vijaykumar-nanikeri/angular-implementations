import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { VehicleService } from '../../../vehicle.service';

@Component({
  selector: 'app-rogue',
  templateUrl: './rogue.component.html',
  styleUrls: ['./rogue.component.scss']
})
export class RogueComponent implements OnInit, AfterViewChecked {
  @ViewChild('cardEl') cardEl!: ElementRef;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.vehicleService.highlight(this.cardEl);
  }

}
