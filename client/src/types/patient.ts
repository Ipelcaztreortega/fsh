// src/types/patient.ts
export interface Patient {
    patient_id: number;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    gender?: string;
    address?: string;
    phone_number?: string;
    email?: string;
}