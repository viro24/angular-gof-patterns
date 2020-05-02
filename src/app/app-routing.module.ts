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
  },
  {
    path: 'state',
    loadChildren: () => import('./patterns/behavioral/state/state.module').then(module => module.StateModule)
  },
  {
    path: 'strategy',
    loadChildren: () => import('./patterns/behavioral/strategy/strategy.module').then(module => module.StrategyModule)
  },
  {
    path: 'template-method',
    loadChildren: () =>
      import('./patterns/behavioral/template-method/template-method.module').then(module => module.TemplateMethodModule)
  },
  {
    path: 'visitor',
    loadChildren: () => import('./patterns/behavioral/visitor/visitor.module').then(module => module.VisitorModule)
  },
  {
    path: 'object/adapter',
    loadChildren: () => import('./patterns/structural/adapter/object/adapter.module').then(module => module.AdapterModule)
  },
  {
    path: 'class/adapter',
    loadChildren: () => import('./patterns/structural/adapter/class/adapter.module').then(module => module.AdapterModule)
  },
  {
    path: 'bridge',
    loadChildren: () => import('./patterns/structural/bridge/bridge.module').then(module => module.BridgeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
