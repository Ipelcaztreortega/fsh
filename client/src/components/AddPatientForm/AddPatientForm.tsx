import React, { useState } from 'react';
import { patientService } from '../../services/patientApi';

interface AddPatientFormProps {
    onClose: () => void;
    onSave: () => void;
}

export const AddPatientForm = ({ onClose, onSave }: AddPatientFormProps) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        gender: '',
        address: '',
        phone_number: '',
        email: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await patientService.create(formData);
            onSave();
            onClose();
        } catch (err) {
            console.error('Failed to add patient:', err);
        }
    };

    return (
        <div>
            <h2>Add New Patient</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        value={formData.first_name}
                        onChange={(e) => setFormData(prev => ({ ...prev, first_name: e.target.value }))}
                        maxLength={50}
                        required
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        value={formData.last_name}
                        onChange={(e) => setFormData(prev => ({ ...prev, last_name: e.target.value }))}
                        maxLength={50}
                        required
                    />
                </div>
                <div>
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        value={formData.date_of_birth}
                        onChange={(e) => setFormData(prev => ({ ...prev, date_of_birth: e.target.value }))}
                        required
                    />
                </div>
                <div>
                    <label>Gender</label>
                    <input
                        type="text"
                        value={formData.gender}
                        onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))}
                        maxLength={10}
                    />
                </div>
                <div>
                    <label>Address</label>
                    <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                        maxLength={255}
                    />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        value={formData.phone_number}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone_number: e.target.value }))}
                        maxLength={20}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        maxLength={100}
                    />
                </div>
                <div>
                    <button type="button" onClick={onClose}>Cancel</button>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};