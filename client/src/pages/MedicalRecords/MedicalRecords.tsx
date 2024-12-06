// pages/MedicalRecords.tsx
import { useState, useEffect } from 'react';
import { MedicalRecord } from '../../types/medicalRecords';
import { medicalRecordService } from '../../services/medicalRecordsApi';
import { format } from 'date-fns';

export const MedicalRecords = () => {
    const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchMedicalRecords();
    }, []);

    const fetchMedicalRecords = async () => {
        try {
            const data = await medicalRecordService.getAll();
            setMedicalRecords(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString: string) => {
        return format(new Date(dateString), 'MMM dd, yyyy');
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Medical Records</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Patient Name</th>
                        <th>Doctor Name</th>
                        <th>Diagnosis</th>
                        <th>Notes</th>
                        <th>Test Results</th>
                        <th>Next Visit</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {medicalRecords.map((record) => (
                        <tr key={record.record_id}>
                            <td>{record.record_id}</td>
                            <td>{`${record.patient_first_name} ${record.patient_last_name}`}</td>
                            <td>{`Dr. ${record.doctor_first_name} ${record.doctor_last_name}`}</td>
                            <td>{record.diagnosis}</td>
                            <td>{record.notes}</td>
                            <td>{record.test_results}</td>
                            <td>{formatDate(record.next_visit)}</td>
                            <td>
                                <button onClick={() => {/* Add edit functionality */}}>
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};