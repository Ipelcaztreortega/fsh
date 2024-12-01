// src/services/api.ts
import { Patient } from '../types/patient';

const API_URL = 'http://localhost:3000/api';

export const patientService = {
    getAll: async (): Promise<Patient[]> => {
        const response = await fetch(`${API_URL}/patients`);
        if (!response.ok) throw new Error('Failed to fetch patients');
        return response.json();
    },
    getById: async (id: number): Promise<Patient> => {
        const response = await fetch(`${API_URL}/patients/${id}`);
        if (!response.ok) throw new Error('Failed to fetch patient');
        return response.json();
    },
    create: async (data: Omit<Patient, 'patient_id'>): Promise<Patient> => {
        const response = await fetch(`${API_URL}/patients`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to create patient');
        return response.json();
    },
    delete: async (id: number): Promise<void> => {
        const response = await fetch(`${API_URL}/patients/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete patient');
    },
    update: async (id: number, data: Partial<Patient>): Promise<Patient> => {
        const response = await fetch(`${API_URL}/patients/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to update patient');
        return response.json();
    }
};