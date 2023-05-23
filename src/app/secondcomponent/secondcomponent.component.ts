import { Component,OnInit } from '@angular/core';
import { student } from '../student.interface';
// import { studentservice } from '../student.service';
import { studentservice } from '../student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.css']
})
export class SecondcomponentComponent {
  students!: student[];
  service: any;
  constructor(private studentservice:studentservice,private router:Router){}
  ngOnInit(): void {
    console.log('this')
    this.students=this.studentservice.getStudents();
    console.log('student',this.students)
  }
  onnext(){
    this.router.navigate(['/third']);

  }
  Before(){
    this.router.navigate(['/first'])
  }

}
