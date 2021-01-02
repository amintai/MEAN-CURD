import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../employee';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public employies: Employee[];

  constructor(private _employeeService: EmployeeService , private router : Router) { }

  ngOnInit(): void {
    this.viewEmployies();
  }

  viewEmployies() {
    this._employeeService.viewEmployies().subscribe(data=>{console.log(data); 
      this.employies=data['msg']
      ,error=>{console.log(error)}})
  }

  doUpdate(employee){
        this._employeeService.setter(employee);
        this.router.navigate(['/create']);
  }

  doDelete(employee){
    this._employeeService.deleteEmployee(employee._id).subscribe(
      data => {
        console.log(data);
        this.employies.splice(this.employies.indexOf(employee),1)}, error => {console.log(error)})
  }
}
