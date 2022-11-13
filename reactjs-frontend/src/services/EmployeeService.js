import axios from "./customizeAxios";

const getAllEmployees = () => {
  return axios.get("/api/v1/employees");
};

export { getAllEmployees };
