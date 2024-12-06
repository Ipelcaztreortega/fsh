// types/appointments.ts
export interface Appointment {
    appointment_id: number;
    appointment_date: string;
    appointment_time: string;
    info: string;
    patient_id: number;
    patient_first_name: string;
    patient_last_name: string;
    doctor_id: number;
    doctor_first_name: string;
    doctor_last_name: string;
}