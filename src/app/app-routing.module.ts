import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentObject } from '../app/components';

const routes: Routes = [
  { path: '', redirectTo: 'up', pathMatch: 'full' },
  { path: 'up', component: componentObject.ExampleUpComponent },
  { path: 'down', component: componentObject.ExampleDownComponent },
  { path: 'only', component: componentObject.ExampleOnlyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
