import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IteratorComponent } from './iterator.component';

const routes: Routes = [
  {
    path: '',
    component: IteratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IteratorRoutingModule {}
