import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeService} from '../../shared/employee.service';
import { Employee } from '../../employee';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router : Router , private employeeService : EmployeeService) { }

  ngOnInit(): void {
  }

  newEmployee(event : any)  {
    event.preventDefault();
    this.employeeService.setter(new Employee());
    this.router.navigate(['/create']);
  }
}
