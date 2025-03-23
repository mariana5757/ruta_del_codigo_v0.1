import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css']
})
export class HeadbarComponent {

  constructor(private router: Router) {}

  options = [{id:0, value:'Trainee'}, {id:1, value:'Junior'}, {id:2, value:'Advanced'}, {id:3, value:'Senior'}, {id:4, value:'Master'}];
  topics = [{id:0, value:'ngRx'}];

  changeOption(option: any){
    switch (option.id) {
      case 0:
        this.router.navigate(['/trainee']);
        break;
      case 1:
        break;
      case 2:
        break;
      default:
        break;
    }
  }

  goHome(){
    this.router.navigate(['/']);
  }
}
