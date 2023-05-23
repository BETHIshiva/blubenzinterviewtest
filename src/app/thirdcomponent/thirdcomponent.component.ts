import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thirdcomponent',
  templateUrl: './thirdcomponent.component.html',
  styleUrls: ['./thirdcomponent.component.css']
})
export class ThirdcomponentComponent {
  constructor(private router:Router){}
  click(){
    console.log('click');
  
  }
  Before(){
    this.router.navigate(['/second'])
  }

}
