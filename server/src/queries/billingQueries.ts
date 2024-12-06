// queries/billingQueries.ts
export const billingQueries = {
    getBillings: `
        SELECT 
            b.billing_id,
            b.patient_id,
            b.doctor_id,
            b.record_date,
            p.first_name as patient_first_name,
            p.last_name as patient_last_name,
            d.first_name as doctor_first_name,
            d.last_name as doctor_last_name
        FROM billings b
        JOIN patients p ON b.patient_id = p.patient_id
        JOIN doctors d ON b.doctor_id = d.doctor_id
    `,
    getBillingById: `
        SELECT 
            b.billing_id,
            b.patient_id,
            b.doctor_id,
            b.record_date,
            p.first_name as patient_first_name,
            p.last_name as patient_last_name,
            d.first_name as doctor_first_name,
            d.last_name as doctor_last_name
        FROM billings b
        JOIN patients p ON b.patient_id = p.patient_id
        JOIN doctors d ON b.doctor_id = d.doctor_id
        WHERE b.billing_id = $1
    `,
};