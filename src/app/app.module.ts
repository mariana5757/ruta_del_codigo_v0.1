import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadbarComponent } from './components/headbar/headbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TraineePageComponent } from './pages/trainee-page/trainee-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CodeComponent } from './components/trainee-folder/code/code.component';
import { IndexComponent } from './pages/index/index.component';
import { AngularBasicComponent } from './atoms/angular-basic/angular-basic.component';
import { EstructureAngularComponent } from './atoms/estructure-angular/estructure-angular.component';
import { StructuralAtributiveDirectivesComponent } from './atoms/structural-atributive-directives/structural-atributive-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    TraineePageComponent,
    CodeComponent,
    IndexComponent,
    AngularBasicComponent,
    EstructureAngularComponent,
    StructuralAtributiveDirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
