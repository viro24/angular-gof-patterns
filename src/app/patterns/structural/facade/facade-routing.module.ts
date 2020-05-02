import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacadeComponent } from './facade.component';

const routes: Routes = [
  {
    path: '',
    component: FacadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacadeRoutingModule {}
