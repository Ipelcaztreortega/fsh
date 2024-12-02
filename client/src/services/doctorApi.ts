import axios from 'axios';
import { Doctor } from '../types/doctor';

const BASE_URL = 'http://localhost:3000/api/doctors';

export const doctorService = {
    getAll: async (): Promise<Doctor[]> => {
        const response = await axios.get(BASE_URL);
        return response.data;
    },

    getById: async (id: number): Promise<Doctor> => {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    },

    create: async (doctor: Omit<Doctor, 'doctor_id'>): Promise<Doctor> => {
        const response = await axios.post(BASE_URL, doctor);
        return response.data;
    },

    update: async (id: number, doctor: Partial<Doctor>): Promise<Doctor> => {
        const response = await axios.put(`${BASE_URL}/${id}`, doctor);
        return response.data;
    },

    delete: async (id: number): Promise<void> => {
        await axios.delete(`${BASE_URL}/${id}`);
    }
};