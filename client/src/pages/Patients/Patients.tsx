// import { useState, useEffect } from 'react';
// import { Patient } from '../../types/patient';
// import { patientService } from '../../services/patientApi';
// import { format } from 'date-fns';
// import { EditPatientForm } from '../../components/EditPatientForm/EditPatientForm';

// export const Patients = () => {
//     const [patients, setPatients] = useState<Patient[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string>('');
//     const [editingPatient, setEditingPatient] = useState<Patient | null>(null);

//     useEffect(() => {
//         fetchPatients();
//     }, []);

//     const fetchPatients = async () => {
//         try {
//             const data = await patientService.getAll();
//             setPatients(data);
//         } catch (err) {
//             setError(err instanceof Error ? err.message : 'An error occurred');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleDelete = async (id: number) => {
//         if (window.confirm('Are you sure you want to delete this patient?')) {
//             try {
//                 await patientService.delete(id);
//                 setPatients(patients.filter(patient => patient.patient_id !== id));
//             } catch (err) {
//                 setError(err instanceof Error ? err.message : 'Failed to delete patient');
//             }
//         }
//     };

//     const handleEdit = (patient: Patient) => {
//         setEditingPatient(patient);
//     };

//     const formatDate = (dateString: string) => {
//         const date = new Date(dateString);
//         return format(date, 'MMM dd, yyyy');
//     };

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div>
//             <h1>Patients</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Date of Birth</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {patients.map((patient) => (
//                         <tr key={patient.patient_id}>
//                             <td>{patient.patient_id}</td>
//                             <td>{patient.first_name}</td>
//                             <td>{patient.last_name}</td>
//                             <td>{formatDate(patient.date_of_birth)}</td>
//                             <td>
//                                 <button onClick={() => handleEdit(patient)}>
//                                     Edit
//                                 </button>
//                                 <button onClick={() => handleDelete(patient.patient_id)}>
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {editingPatient && (
//                 <EditPatientForm
//                     patient={editingPatient}
//                     onClose={() => setEditingPatient(null)}
//                     onSave={fetchPatients}
//                 />
//             )}
//         </div>
//     );
// };

import { useState, useEffect } from 'react';
import { Patient } from '../../types/patient';
import { patientService } from '../../services/patientApi';
import { format } from 'date-fns';
import { EditPatientForm } from '../../components/EditPatientForm/EditPatientForm';
import { AddPatientForm } from '../../components/AddPatientForm/AddPatientForm';

export const Patients = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');
    const [editingPatient, setEditingPatient] = useState<Patient | null>(null);
    const [isAddingPatient, setIsAddingPatient] = useState(false);

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
        if (window.confirm('Are you sure you want to delete this patient?')) {
            try {
                await patientService.delete(id);
                setPatients(patients.filter(patient => patient.patient_id !== id));
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to delete patient');
            }
        }
    };

    const handleEdit = (patient: Patient) => {
        setEditingPatient(patient);
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
            <button onClick={() => setIsAddingPatient(true)}>Add New Patient</button>
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
                                <button onClick={() => handleEdit(patient)}>
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

            {editingPatient && (
                <EditPatientForm
                    patient={editingPatient}
                    onClose={() => setEditingPatient(null)}
                    onSave={fetchPatients}
                />
            )}

            {isAddingPatient && (
                <AddPatientForm
                    onClose={() => setIsAddingPatient(false)}
                    onSave={fetchPatients}
                />
            )}
        </div>
    );
};

export default Patients;