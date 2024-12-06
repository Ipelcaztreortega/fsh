// services/medicalRecordApi.ts
import { MedicalRecord } from '../types/medicalRecords';

const API_URL = 'http://localhost:3000/api';

export const medicalRecordService = {
    getAll: async (): Promise<MedicalRecord[]> => {
        const response = await fetch(`${API_URL}/medical-records`);
        if (!response.ok) throw new Error('Failed to fetch medical records');
        return response.json();
    },
    getById: async (id: number): Promise<MedicalRecord> => {
        const response = await fetch(`${API_URL}/medical-records/${id}`);
        if (!response.ok) throw new Error('Failed to fetch medical record');
        return response.json();
    },
};