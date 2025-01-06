import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraineePageComponent } from './pages/trainee-page/trainee-page.component';
import { IndexComponent } from './pages/index/index.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'trainee', component: TraineePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
