import axios from "./customizeAxios";

const getAllEmployees = () => {
  return axios.get("/api/v1/employees");
};

const postAddNewEmployee = (employee) => {
  return axios.post("/api/v1/employees", employee);
};

const getEmployeeById = (id) => {
  return axios.get(`/api/v1/employees/${id}`);
};

const putUpdateEmployee = (id, employee) => {
  return axios.put(`/api/v1/employees/${id}`, employee);
};

const deleteEmployee = (id) => {
  return axios.delete(`/api/v1/employees/${id}`);
};

export {
  getAllEmployees,
  postAddNewEmployee,
  getEmployeeById,
  putUpdateEmployee,
  deleteEmployee,
};
