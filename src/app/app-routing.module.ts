import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowProjComponent } from './projeto/show-proj/show-proj.component';
import { AddEditProjComponent } from './projeto/add-edit-proj/add-edit-proj.component'

const routes: Routes = [
  {path: 'projeto', component:AddEditProjComponent},
  {path: 'projeto/:id', component:AddEditProjComponent},
  {path: 'projetos', component:ShowProjComponent},
  {path: '', component:ShowProjComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
