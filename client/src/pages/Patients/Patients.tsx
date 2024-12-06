import { useState, useEffect } from 'react';
import { Patient } from '../../types/patient';
import { patientService } from '../../services/patientApi';
import { format } from 'date-fns';

export const Patients = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = async () => {
        try {
            const data = await patientService.getAll();
            setPatients(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await patientService.delete(id);
            fetchPatients();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to delete patient');
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return format(date, 'MMM dd, yyyy');
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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr key={patient.patient_id}>
                            <td>{patient.patient_id}</td>
                            <td>{patient.first_name}</td>
                            <td>{patient.last_name}</td>
                            <td>{formatDate(patient.date_of_birth)}</td>
                            <td>
                                <button onClick={() => {/* Add edit functionality */}}>
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(patient.patient_id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};