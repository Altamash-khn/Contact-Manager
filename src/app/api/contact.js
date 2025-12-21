import axios from "axios";

const API_URL = "http://localhost:3001";

export const getContacts = async (userId) => {
  const res = await axios.get(`${API_URL}/contacts?userId=${userId}`);
  return res.data;
};

export const getContactById = async (id) => {
  const res = await axios.get(`${API_URL}/contacts/${id}`);
  return res.data;
};

export const createContact = async (contact) => {
  const res = await axios.post(`${API_URL}/contacts`, contact);
  return res.data;
};

export const updateContact = async (id, contact) => {
  const res = await axios.put(`${API_URL}/contacts/${id}`, contact);
  return res.data;
};

export const deleteContact = async (id) => {
  const res = await axios.delete(`${API_URL}/contacts/${id}`);
  return res.data;
};
