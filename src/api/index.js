import axios from 'axios';

const url = 'http://localhost:8080/api/customers';

export const fetchCustomers = () => axios.get(url);
export const deleteCustomer = (id) => axios.delete(`${url}/${id}`);
export const createCustomer = (customer) => axios.post(url, customer);
export const updateCustomer = (id, updateCustomer) => axios.put(`${url}/${id}`, updateCustomer);