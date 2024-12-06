// queries/doctorQueries.ts
export const doctorQueries = {
    getDoctors: `
        SELECT 
            d.doctor_id,
            d.first_name,
            d.last_name,
            d.department_id,
            dep.name as department_name,
            dep.head_of_department
        FROM doctors d
        JOIN departments dep ON d.department_id = dep.department_id
    `,
    getDoctorById: `
        SELECT 
            d.doctor_id,
            d.first_name,
            d.last_name,
            d.department_id,
            dep.name as department_name,
            dep.head_of_department
        FROM doctors d
        JOIN departments dep ON d.department_id = dep.department_id
        WHERE d.doctor_id = $1
    `,
};