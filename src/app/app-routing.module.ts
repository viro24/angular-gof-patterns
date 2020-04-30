import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'interpreter',
    loadChildren: () => import('./patterns/behavioral/interpreter/interpreter.module').then(module => module.InterpreterModule)
  },
  {
    path: 'iterator',
    loadChildren: () => import('./patterns/behavioral/iterator/iterator.module').then(module => module.IteratorModule)
  },
  {
    path: 'mediator',
    loadChildren: () => import('./patterns/behavioral/mediator/mediator.module').then(module => module.MediatorModule)
  },
  {
    path: 'memento',
    loadChildren: () => import('./patterns/behavioral/memento/memento.module').then(module => module.MementoModule)
  },
  {
    path: 'observer',
    loadChildren: () => import('./patterns/behavioral/observer/observer.module').then(module => module.ObserverModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
