import { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { getAllEmployees } from "../services/EmployeeService";

const EmployeeList = () => {
  const [employees, setEmployees] = useState("");
  useEffect(() => {
    getAllEmployees()
      .then((res) => {
        setEmployees(res);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Container>
        <h1>Employee List</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {employees &&
              employees.map((employee, index) => {
                return (
                  <tr key={"employee " + index}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.emailId}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default EmployeeList;
