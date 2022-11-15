import { Modal, Button } from "react-bootstrap";
import { deleteEmployee } from "../services/EmployeeService";

const ModalComfirmDelete = ({ show, handleClose, employeeDelete }) => {
  const handleDeleteEmployee = async () => {
    const res = await deleteEmployee(employeeDelete.id);
    if (res) {
      handleClose();
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to delete employee: <b>{employeeDelete.emailId}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDeleteEmployee}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComfirmDelete;
