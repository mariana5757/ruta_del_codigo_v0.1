import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraineePageComponent } from './pages/trainee-page/trainee-page.component';
import { IndexComponent } from './pages/index/index.component';
import { JuniorPageComponent } from './pages/junior-page/junior-page.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'trainee', component: TraineePageComponent },
  { path: 'junior', component: JuniorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
