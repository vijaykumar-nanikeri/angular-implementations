import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle.component';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { HondaComponent } from './honda/honda.component';
import { NissanComponent } from './nissan/nissan.component';
import { HondaSedanComponent } from './honda/honda-sedan/honda-sedan.component';
import { HondaSuvComponent } from './honda/honda-suv/honda-suv.component';
import { NissanSedanComponent } from './nissan/nissan-sedan/nissan-sedan.component';
import { NissanSuvComponent } from './nissan/nissan-suv/nissan-suv.component';
import { AccordComponent } from './honda/honda-sedan/accord/accord.component';
import { CivicComponent } from './honda/honda-sedan/civic/civic.component';
import { PilotComponent } from './honda/honda-suv/pilot/pilot.component';
import { CrvComponent } from './honda/honda-suv/crv/crv.component';
import { AltimaComponent } from './nissan/nissan-sedan/altima/altima.component';
import { MaximaComponent } from './nissan/nissan-sedan/maxima/maxima.component';
import { ArmadaComponent } from './nissan/nissan-suv/armada/armada.component';
import { RogueComponent } from './nissan/nissan-suv/rogue/rogue.component';



@NgModule({
  declarations: [
    VehicleComponent,
    HondaComponent,
    NissanComponent,
    HondaSedanComponent,
    HondaSuvComponent,
    NissanSedanComponent,
    NissanSuvComponent,
    AccordComponent,
    CivicComponent,
    PilotComponent,
    CrvComponent,
    AltimaComponent,
    MaximaComponent,
    ArmadaComponent,
    RogueComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule
  ]
})
export class VehicleModule { }
