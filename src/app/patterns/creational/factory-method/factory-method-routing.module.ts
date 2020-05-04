import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactoryMethodComponent } from './factory-method.component';

const routes: Routes = [
  {
    path: '',
    component: FactoryMethodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactoryMethodRoutingModule {}
