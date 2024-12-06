// queries/medicalRecordQueries.ts
export const medicalRecordQueries = {
    getMedicalRecords: `
        SELECT 
            mr.record_id,
            mr.patient_id,
            mr.doctor_id,
            mr.diagnosis,
            mr.notes,
            mr.test_results,
            mr.next_visit,
            p.first_name as patient_first_name,
            p.last_name as patient_last_name,
            d.first_name as doctor_first_name,
            d.last_name as doctor_last_name
        FROM medical_records mr
        JOIN patients p ON mr.patient_id = p.patient_id
        JOIN doctors d ON mr.doctor_id = d.doctor_id
    `,
    getMedicalRecordById: `
        SELECT 
            mr.record_id,
            mr.patient_id,
            mr.doctor_id,
            mr.diagnosis,
            mr.notes,
            mr.test_results,
            mr.next_visit,
            p.first_name as patient_first_name,
            p.last_name as patient_last_name,
            d.first_name as doctor_first_name,
            d.last_name as doctor_last_name
        FROM medical_records mr
        JOIN patients p ON mr.patient_id = p.patient_id
        JOIN doctors d ON mr.doctor_id = d.doctor_id
        WHERE mr.record_id = $1
    `,
};
