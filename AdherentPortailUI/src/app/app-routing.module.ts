import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdherentsComponent } from './Component/adherents/adherents.component';

const routes: Routes = [
  {path:'',component:AdherentsComponent},
  {path:'adherents',component:AdherentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
