import { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { getAllEmployees } from "../services/EmployeeService";
import ModalAddNew from "./ModalAddNew";
import ModalComfirmDelete from "./ModalComfirmDelete";
import ModalEdit from "./ModalEdit";

const EmployeeList = () => {
  const [employees, setEmployees] = useState("");
  const [showModalAddNew, setShowModalAddNew] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalConfirmDelete, setShowModalConfirmDelete] = useState(false);
  const [employeeEdit, setEmployeeEdit] = useState({});
  const [employeeDelete, setEmployeeDelete] = useState({});

  useEffect(() => {
    getAllEmployees()
      .then((res) => {
        setEmployees(res);
      })
      .catch((e) => console.log(e));
  }, [showModalAddNew, showModalEdit, showModalConfirmDelete]);

  const handleClose = () => {
    setShowModalAddNew(false);
    setShowModalEdit(false);
    setShowModalConfirmDelete(false);
  };

  return (
    <>
      <ModalAddNew show={showModalAddNew} handleClose={handleClose} />
      <ModalEdit
        show={showModalEdit}
        handleClose={handleClose}
        employeeEdit={employeeEdit}
      />
      <ModalComfirmDelete
        show={showModalConfirmDelete}
        handleClose={handleClose}
        employeeDelete={employeeDelete}
      />
      <Container>
        <h1>Employee List</h1>
        <Button
          className="my-3"
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
                      <Button
                      className="mx-3"
                        variant="warning"
                        onClick={() => {
                          setEmployeeEdit(employee);
                          setShowModalEdit(true);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          setEmployeeDelete(employee);
                          setShowModalConfirmDelete(true);
                        }}
                      >
                        Delete
                      </Button>
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
