import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlyweightComponent } from './flyweight.component';

const routes: Routes = [
  {
    path: '',
    component: FlyweightComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlyweightRoutingModule {}
