import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdapterComponent } from './adapter.component';

const routes: Routes = [
  {
    path: '',
    component: AdapterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdapterRoutingModule {}
