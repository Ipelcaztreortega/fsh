// services/doctorApi.ts
import { Doctor } from '../types/doctor';

const API_URL = 'http://localhost:3000/api';

export const doctorService = {
    getAll: async (): Promise<Doctor[]> => {
        const response = await fetch(`${API_URL}/doctors`);
        if (!response.ok) throw new Error('Failed to fetch doctors');
        return response.json();
    },
    getById: async (id: number): Promise<Doctor> => {
        const response = await fetch(`${API_URL}/doctors/${id}`);
        if (!response.ok) throw new Error('Failed to fetch doctor');
        return response.json();
    },
};