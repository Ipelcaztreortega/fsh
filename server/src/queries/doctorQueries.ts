export const doctorQueries = {
    getDoctors: 'SELECT * FROM doctors',
    getDoctorById: 'SELECT * FROM doctors WHERE doctor_id = $1',
    addDoctor: 
        'INSERT INTO doctors (first_name, last_name, department_id) VALUES ($1, $2, $3) RETURNING *',
    updateDoctor: 
        'UPDATE doctors SET first_name = $1, last_name = $2, department_id = $3 WHERE doctor_id = $4 RETURNING *',
    deleteDoctor: 'DELETE FROM doctors WHERE doctor_id = $1 RETURNING *'
};