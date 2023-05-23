import { Injectable } from '@angular/core';
import { student } from "./student.interface";
@Injectable()
export class studentservice{
    getStudents():student[]{
        return [
            {
    id:1,
    name:"Ahmed",
    age:18,
    grade:'A',
    mail:'a@123',
    class:10

},
{
    id:2,
    name:"shiva",
    age:18,
    grade:'A',
    mail:'a@123',
    class:9

},
{
    id:3,
    name:"kumar",
    age:18,
    grade:'A',
    mail:'a@123',
    class:8

},
{
    id:4,
    name:"raj",
    age:18,
    grade:'A',
    mail:'r1@123',
    class:7

},{
    id:5,
    name:"ram",
    age:18,
    grade:'A',
    mail:'r@123',
    class:8

},{
    id:6,
    name:"jagan",
    age:18,
    grade:'A',
    mail:'j@123',
    class:10

}
        ];
    }
   
}
