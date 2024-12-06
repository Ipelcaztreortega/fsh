// services/doctorApi.ts
import { Billing } from '../types/billings';

const API_URL = 'http://localhost:3000/api';

export const billingService = {
    getAll: async (): Promise<Billing[]> => {
        const response = await fetch(`${API_URL}/billings`);
        if (!response.ok) throw new Error('Failed to fetch billings');
        return response.json();
    },
    getById: async (id: number): Promise<Billing> => {
        const response = await fetch(`${API_URL}/billings/${id}`);
        if (!response.ok) throw new Error('Failed to fetch billings');
        return response.json();
    },
};