import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent {
  user!:string ;
  password!:string;
  constructor(private router:Router){}
  submit(){
    console.log(this.user,this.password);
    if(this.user==="bluebenz" && this.password==="12345") {
      console.log("login success");
      this.router.navigate(['/second']);
    }
    else{
      alert('please enter correct user and password')
    }
  }

}
