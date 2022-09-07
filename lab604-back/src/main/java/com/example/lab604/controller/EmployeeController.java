package com.example.lab604.controller;

import com.example.lab604.model.Employee;
import com.example.lab604.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    public List<Employee> findAllEmployees(){
        return employeeRepository.findAll();
    }

}
