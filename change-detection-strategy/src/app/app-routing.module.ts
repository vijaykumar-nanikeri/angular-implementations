import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'vehicle',
    loadChildren: () => import('./vehicle/vehicle.module').then(mod => mod.VehicleModule)
  }, {
    path: '**',
    redirectTo: 'vehicle'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
