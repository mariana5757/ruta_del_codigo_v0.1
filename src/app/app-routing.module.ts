import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraineePageComponent } from './pages/trainee-page/trainee-page.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'trainee', component: TraineePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
