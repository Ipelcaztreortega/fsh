// pages/Appointments.tsx
import { useState, useEffect } from 'react';
import { Appointment } from '../../types/appointments';
import { appointmentService } from '../../services/apppointmentApi';
import { format } from 'date-fns'; // You'll need to install this package

export const Appointments = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const data = await appointmentService.getAll();
            setAppointments(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const formatDateTime = (date: string, time: string) => {
        const dateObj = new Date(`${date.split('T')[0]}T${time}`);
        return format(dateObj, 'MMM dd, yyyy hh:mm a');
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="">
            <h1 className="">Appointments</h1>
            <table className="">
                <thead className="">
                    <tr>
                        <th className="">Patient Name</th>
                        <th className="">Doctor Name</th>
                        <th className="">DateTime</th>
                        <th className="">Info</th>
                        <th className="">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment.appointment_id} className="">
                            <td className="">
                                {appointment.patient_first_name} {appointment.patient_last_name}
                            </td>
                            <td className="">
                                Dr. {appointment.doctor_first_name} {appointment.doctor_last_name}
                            </td>
                            <td className="">
                                {formatDateTime(appointment.appointment_date, appointment.appointment_time)}
                            </td>
                            <td className="">
                                {appointment.info}
                            </td>
                            <td className="">
                                <button 
                                    className=""
                                    onClick={() => {/* Add edit functionality */}}
                                >
                                    Edit
                                </button>
                                <button 
                                    className=""
                                    onClick={() => {/* Add delete functionality */}}
                                >
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