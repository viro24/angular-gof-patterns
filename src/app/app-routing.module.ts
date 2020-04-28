import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'chain-of-responsability',
    loadChildren: () =>
      import('./patterns/behavioral/chain-of-responsability/chain-of-responsability.module').then(
        module => module.ChainOfResponsabilityModule
      )
  },
  {
    path: 'command',
    loadChildren: () => import('./patterns/behavioral/command/command.module').then(module => module.CommandModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
