import { useState, useEffect } from 'react';
import { Billing } from '../../types/billings';
import { billingService } from '../../services/billingApi';
import { format } from 'date-fns';

export const Billings = () => {
    const [billings, setBillings] = useState<Billing[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        fetchBillings();
    }, []);

    const fetchBillings = async () => {
        try {
            const data = await billingService.getAll();
            setBillings(data);
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
            <h1>Billings</h1>
            <table>
                <thead>
                    <tr>
                        <th>Billing ID</th>
                        <th>Patient Name</th>
                        <th>Doctor Name</th>
                        <th>Record Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {billings.map((billing) => (
                        <tr key={billing.billing_id}>
                            <td>{billing.billing_id}</td>
                            <td>{`${billing.patient_first_name} ${billing.patient_last_name}`}</td>
                            <td>{`Dr. ${billing.doctor_first_name} ${billing.doctor_last_name}`}</td>
                            <td>{formatDate(billing.record_date)}</td>
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