// queries/appointmentQueries.ts
export const appointmentQueries = {
    getAppointments: `
        SELECT 
            a.appointment_id,
            a.appointment_date,
            a.appointment_time,
            a.info,
            p.patient_id,
            p.first_name as patient_first_name,
            p.last_name as patient_last_name,
            d.doctor_id,
            d.first_name as doctor_first_name,
            d.last_name as doctor_last_name
        FROM appointments a
        JOIN patients p ON a.patient_id = p.patient_id
        JOIN doctors d ON a.doctor_id = d.doctor_id
    `,
    getAppointmentById: `
        SELECT 
            a.appointment_id,
            a.appointment_date,
            a.appointment_time,
            a.info,
            p.patient_id,
            p.first_name as patient_first_name,
            p.last_name as patient_last_name,
            d.doctor_id,
            d.first_name as doctor_first_name,
            d.last_name as doctor_last_name
        FROM appointments a
        JOIN patients p ON a.patient_id = p.patient_id
        JOIN doctors d ON a.doctor_id = d.doctor_id
        WHERE a.appointment_id = $1
    `,
};