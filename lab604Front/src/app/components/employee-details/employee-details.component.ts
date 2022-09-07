import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input()
  selectedEmployee : Employee

  @Input()
  selectedIndex :number

  @Output()
  employeDeleter = new EventEmitter<number>();


  constructor() {
    this.selectedEmployee = new Employee(0, "Ndesde el comp", "No employee selected", 0, "No employee selected", "No employee selected")
    this.selectedIndex = 0
   }

  ngOnInit(): void {
  }

  delete(){
    this.employeDeleter.emit(this.selectedIndex)

  }

}
