package com.example.lab604;

import com.example.lab604.model.Employee;
import com.example.lab604.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class Lab604Application implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(Lab604Application.class, args);
	}

	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
		Employee employee1 = new Employee("A. Jlaksd", "6548-654", 69, "Boss", "HImself");
		Employee employee2 = new Employee("B. Udksl", "1561-123", 96, "Secretary", "Jas");
		Employee employee3 = new Employee("C. Dnysd", "41681-654", 420, "VIceBoos", "dasd");
		Employee employee4 = new Employee("D. NCduiy", "6666-654", 111, "Boss", "fsd");
		Employee employee5 = new Employee("E. Ajd", "1234-555", 666, "Boss", "sdf");
		Employee employee6 = new Employee("Jaimito", "6969-654", 69, "Boss", "fdfs");

		employeeRepository.saveAll(List.of(employee1, employee2, employee3, employee4, employee5, employee6));



	}
}
