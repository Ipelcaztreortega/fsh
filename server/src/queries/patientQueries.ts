export const patientQueries = {
    getPatients: 'SELECT * FROM patients',
    getPatientById: 'SELECT * FROM patients WHERE patient_id = $1',
    addPatient: 'INSERT INTO patients (first_name, last_name, date_of_birth, gender, address, phone_number, email) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    updatePatient: 'UPDATE patients SET first_name = $1, last_name = $2, date_of_birth = $3, gender = $4, address = $5, phone_number = $6, email = $7 WHERE patient_id = $8 RETURNING *',
    deletePatient: 'DELETE FROM patients WHERE patient_id = $1'
};