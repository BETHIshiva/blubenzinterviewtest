import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { ThirdcomponentComponent } from './thirdcomponent/thirdcomponent.component';

const routes: Routes = [
  {path:'',redirectTo:'first',pathMatch:'full'},
  {path:'first',component:FirstcomponentComponent},
  {path:'second',component:SecondcomponentComponent},
  {path:'third',component:ThirdcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
