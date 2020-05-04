import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingletonComponent } from './singleton.component';

const routes: Routes = [
  {
    path: '',
    component: SingletonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingletonRoutingModule {}
