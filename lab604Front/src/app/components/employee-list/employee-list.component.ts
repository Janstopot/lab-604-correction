import { Component, OnInit, OnChanges } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList : Employee[]
  selectedEmployee : Employee
  selectedIndex : number

  constructor(private employeeService : EmployeeServiceService) {
    this.employeeList = []
    this.selectedEmployee = new Employee(-1, "blublublu", "No employee selected", 0, "No employee selected", "No employee selected")
    this.selectedIndex = 0
   }

  ngOnInit(): void {
    this.getAllEmployees()
  }

  getAllEmployees(){
    this.employeeService.getAllEmployees().subscribe(result => {
      for(let i = 0; i < result.length; i++){
        this.employeeList.push(result[i])
      }
    })
  }

  selectEmployee(i : number){
    this.selectedEmployee = this.employeeList[i]
    this.selectedIndex = i
    console.log(this.selectedEmployee)
  }

  deleteEmployee(i : number){
    this.employeeList.splice(i, 1)
    this.selectedEmployee = new Employee(-1, "blublublu", "No employee selected", 0, "No employee selected", "No employee selected")
  }

}
