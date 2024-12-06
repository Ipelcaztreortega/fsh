import { Appointment } from '../types/appointments';

const API_URL = 'http://localhost:3000/api';

export const appointmentService = {
    getAll: async (): Promise<Appointment[]> => {
        const response = await fetch(`${API_URL}/appointments`);
        if (!response.ok) throw new Error('Failed to fetch patients');
        return response.json();
    },
    getById: async (id: number): Promise<Appointment> => {
        const response = await fetch(`${API_URL}/appointments/${id}`);
        if (!response.ok) throw new Error('Failed to fetch patient');
        return response.json();
    },
};