import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrototypeComponent } from './prototype.component';

const routes: Routes = [
  {
    path: '',
    component: PrototypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrototypeRoutingModule {}
