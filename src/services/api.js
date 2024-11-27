import axios from 'axios';

// Simulate an API endpoint
const API_URL = 'https://fakeapi.com';  // Replace with actual API URL if real API is available.

export const getUsers = () => {
  return axios.get(`${API_URL}/users`);
};

export const getRoles = () => {
  return axios.get(`${API_URL}/roles`);
};

export const createUser = (user) => {
  return axios.post(`${API_URL}/users`, user);
};

export const deleteUser = (userId) => {
  return axios.delete(`${API_URL}/users/${userId}`);
};

export const createRole = (role) => {
  return axios.post(`${API_URL}/roles`, role);
};
