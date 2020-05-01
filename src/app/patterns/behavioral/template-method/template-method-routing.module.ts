import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateMethodComponent } from './template-method.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateMethodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateMethodRoutingModule {}
