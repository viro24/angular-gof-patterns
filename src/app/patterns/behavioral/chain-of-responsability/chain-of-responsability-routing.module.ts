import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChainOfResponsabilityComponent } from './chain-of-responsability.component';

const routes: Routes = [
  {
    path: '',
    component: ChainOfResponsabilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChainOfResponsabilityRoutingModule {}
