package edu.dac.springboot;

import edu.dac.springboot.model.Employee;
import edu.dac.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootBackendApplication.class, args);
    }

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public void run(String... args) throws Exception {
        // Employee employee = new Employee();
        // employee.setFirstName("Quan");
        // employee.setLastName("Tran");
        // employee.setEmailId("trananhqua0704@gmail.com");
        // employeeRepository.save(employee);

        // Employee employee1 = new Employee();
        // employee1.setFirstName("Hung");
        // employee1.setLastName("Tran");
        // employee1.setEmailId("trananhhung2504@gmail.com");
        // employeeRepository.save(employee1);
    }
}
