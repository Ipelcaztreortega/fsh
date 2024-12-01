import { useState, useEffect } from 'react';

interface Patient {
    patient_id: number;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    gender?: string;
    address?: string;
    phone_number?: string;
    email?: string;
}

export const Patients = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/patients');
            if (!response.ok) {
                throw new Error('Failed to fetch patients');
            }
            const data = await response.json();
            setPatients(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Patients</h1>
            
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr key={patient.patient_id}>
                            <td>{patient.patient_id}</td>
                            <td>{patient.first_name}</td>
                            <td>{patient.last_name}</td>
                            <td>{patient.date_of_birth}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};