import { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { getAllEmployees } from "../services/EmployeeService";
import ModalAddNew from "./ModalAddNew";

const EmployeeList = () => {
  const [employees, setEmployees] = useState("");
  const [showModalAddNew, setShowModalAddNew] = useState(false);

  useEffect(() => {
    getAllEmployees()
      .then((res) => {
        setEmployees(res);
      })
      .catch((e) => console.log(e));
  }, [showModalAddNew]);

  const handleClose = () => {
    setShowModalAddNew(false);
  };
  console.log(showModalAddNew);
  return (
    <>
      <ModalAddNew show={showModalAddNew} handleClose={handleClose} />
      <Container>
        <h1>Employee List</h1>
        <Button
          variant="success"
          onClick={() => {
            setShowModalAddNew(true);
          }}
        >
          Add new
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
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
                    <td>
                      <Button variant="warning">Edit</Button>
                      <Button variant="danger">Delete</Button>
                    </td>
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
