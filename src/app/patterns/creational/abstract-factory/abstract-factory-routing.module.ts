import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbstractFactoryComponent } from './abstract-factory.component';

const routes: Routes = [
  {
    path: '',
    component: AbstractFactoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbstractFactoryRoutingModule {}
