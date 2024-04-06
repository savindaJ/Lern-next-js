import axios from "axios";

export const getAllCustomers = async () => {
  return await axios
    .get("http://localhost:8080/customer")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const addCustomer = async (customer: object) => {
  return await axios
    .post("http://localhost:8080/customer", customer)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
