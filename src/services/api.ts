import axios from 'axios';
import { CREATE, DELETE, GET, HOST, SET, USERDOCS } from '../utils/consts';

const API_HOST = `${HOST}/ru/data/v3/testmethods/docs`;

export const login = (username: string, password: string) =>
    axios.post(`${API_HOST}/login`, { username, password });

export const fetchData = (token: string) =>
    axios.get(`${API_HOST}/${USERDOCS}/${GET}`, { headers: { 'x-auth': token } });

export const createData = (token: string, data: any) =>
    axios.post(`${API_HOST}/${USERDOCS}/${CREATE}`, data, { headers: { 'x-auth': token } });

export const updateData = (token: string, id: string, data: any) =>
    axios.post(`${API_HOST}/${USERDOCS}/${SET}/${id}`, data, { headers: { 'x-auth': token } });

export const deleteData = (token: string, id: string) =>
    axios.post(`${API_HOST}/${USERDOCS}/${DELETE}/${id}`, {}, { headers: { 'x-auth': token } });