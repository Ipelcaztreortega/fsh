import React, { useState} from 'react';
import { Patient } from '../../types/patient';
import { patientService } from '../../services/patientApi';

export const EditPatientForm = ({ 
    patient, 
    onClose, 
    onSave 
}: { 
    patient: Patient; 
    onClose: () => void; 
    onSave: () => void;
}) => {
    const [formData, setFormData] = useState({
        first_name: patient.first_name,
        last_name: patient.last_name,
        date_of_birth: patient.date_of_birth.split('T')[0] // Add this and split to get just the date part
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await patientService.update(patient.patient_id, formData);
            onSave();
            onClose();
        } catch (err) {
            console.error('Failed to update patient:', err);
        }
    };

    return (
        <div>
            <h2>Edit Patient</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        value={formData.first_name}
                        onChange={(e) => setFormData(prev => ({ ...prev, first_name: e.target.value }))}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        value={formData.last_name}
                        onChange={(e) => setFormData(prev => ({ ...prev, last_name: e.target.value }))}
                    />
                </div>
                <div>
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        value={formData.date_of_birth}
                        onChange={(e) => setFormData(prev => ({ ...prev, date_of_birth: e.target.value }))}
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