import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResourceComponent} from './resource/resource.component';
import {ProjectComponent} from './project/project.component';
import {FormulaComponent} from './formula/formula.component';
import {TemplateComponent} from './template/template.component';
import { AuthGuard } from "./auth/auth.guard";
import { ProjTableComponent } from './project/proj-table/proj-table.component';

const routes: Routes = [
  // { path: '', redirectTo: '/auth', pathMatch: 'full' },
  {path: 'Resources', component: ResourceComponent},
  {path: 'Project/:projectTitle', component: ProjectComponent},
  {path: 'Formula', component: FormulaComponent},
  {path: "Template",component:TemplateComponent},
  {path: "auth", loadChildren: "./auth/auth.module#AuthModule"},
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
