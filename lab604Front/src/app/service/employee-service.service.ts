import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private readonly baseUrl = 'http://localhost:8080/employees'



  constructor(private http : HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl)

  }
  
  deleteEmployee(i : number) :void {
    this.http.delete(this.baseUrl + "/delete")
  }
}
