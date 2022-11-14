import axios from "./customizeAxios";

const getAllEmployees = () => {
  return axios.get("/api/v1/employees");
};

const postAddNewEmployee = (employee) => {
  return axios.post("/api/v1/employees", employee);
};

export { getAllEmployees, postAddNewEmployee };
