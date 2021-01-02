import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeService} from '../../shared/employee.service';
import { Employee } from '../../employee';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public employee : Employee;

  constructor(private employeeService : EmployeeService , private router : Router) { }

  ngOnInit(): void  {
    this.employee = this.employeeService.getter();
  }

  createEmployee(){
    if(this.employee._id == undefined){
      this.employeeService.createEmployee(this.employee).subscribe(data=>{console.log(data)
        this.router.navigate(['/'])
        ,error=>{console.log(error)}})
  
    } else {
      this.employeeService.updateEmployee(this.employee).subscribe(data=>{console.log(data)
        this.router.navigate(['/'])
        ,error=>{console.log(error)}})
  
    }
 }


}
