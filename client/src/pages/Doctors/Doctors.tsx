import { useState, useEffect } from 'react';
import { Doctor } from '../../types/doctor';
import { doctorService } from '../../services/doctorApi';

export const Doctors = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            const data = await doctorService.getAll();
            setDoctors(data);
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
            <h1>Doctors</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor) => (
                        <tr key={doctor.doctor_id}>
                            <td>{doctor.doctor_id}</td>
                            <td>{doctor.first_name}</td>
                            <td>{doctor.last_name}</td>
                            <td>{doctor.department_name}</td>
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