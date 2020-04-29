import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediatorComponent } from './mediator.component';

const routes: Routes = [
  {
    path: '',
    component: MediatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediatorRoutingModule {}
