// types/medicalRecords.ts
export interface MedicalRecord {
    record_id: number;
    patient_id: number;
    doctor_id: number;
    patient_first_name: string;
    patient_last_name: string;
    doctor_first_name: string;
    doctor_last_name: string;
    diagnosis: string;
    notes: string;
    test_results: string;
    next_visit: string;
}