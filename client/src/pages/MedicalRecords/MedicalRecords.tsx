import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter, Pencil, Trash2, Calendar, Loader2 } from 'lucide-react';

interface MedicalRecord {
    record_id: number;
    patient_id: number;
    doctor_id: number;
    diagnosis: string;
    notes: string;
    test_results: string;
    next_visit: string;
    // Additional fields for display
    patient_name?: string;
    doctor_name?: string;
}

const MedicalRecords: React.FC = () => {
    const [records, setRecords] = useState<MedicalRecord[]>([
        {
            record_id: 1,
            patient_id: 101,
            doctor_id: 201,
            diagnosis: "Type 2 Diabetes Mellitus",
            notes: "Patient showing improved glucose levels with current medication",
            test_results: "HbA1c: 6.8%",
            next_visit: "2024-12-15",
            patient_name: "John Doe",
            doctor_name: "Dr. Sarah Wilson"
        },
        {
            record_id: 2,
            patient_id: 102,
            doctor_id: 202,
            diagnosis: "Hypertension Stage 1",
            notes: "Blood pressure slightly elevated. Recommended lifestyle changes",
            test_results: "BP: 140/90 mmHg",
            next_visit: "2024-12-20",
            patient_name: "Jane Smith",
            doctor_name: "Dr. Michael Brown"
        },
        {
            record_id: 3,
            patient_id: 103,
            doctor_id: 203,
            diagnosis: "Acute Bronchitis",
            notes: "Prescribed antibiotics for 7 days. Follow up if symptoms persist",
            test_results: "Chest X-ray: Clear",
            next_visit: "2024-12-10",
            patient_name: "Robert Johnson",
            doctor_name: "Dr. Emily Davis"
        },
        {
            record_id: 4,
            patient_id: 104,
            doctor_id: 204,
            diagnosis: "Migraine with Aura",
            notes: "Frequency of episodes increased. Adjusted preventive medication",
            test_results: "MRI: Normal",
            next_visit: "2024-12-25",
            patient_name: "Maria Garcia",
            doctor_name: "Dr. James Wilson"
        }
    ]);

    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredRecords = records.filter(record =>
        record.patient_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Medical Records</h1>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Plus size={20} />
                    <span>New Record</span>
                </button>
            </div>

            {/* Search and Filter Bar */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="col-span-2 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by patient name or diagnosis..."
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="relative">
                    <input
                        type="date"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button className="flex items-center justify-center gap-2 border rounded-lg px-4 py-2 hover:bg-gray-50">
                    <Filter size={20} />
                    <span>Filter</span>
                </button>
            </div>

            {/* Records Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Record ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Patient
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Doctor
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Diagnosis
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Test Results
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Next Visit
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredRecords.map((record) => (
                            <tr key={record.record_id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    #{record.record_id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{record.patient_name}</div>
                                    <div className="text-sm text-gray-500">ID: {record.patient_id}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{record.doctor_name}</div>
                                    <div className="text-sm text-gray-500">ID: {record.doctor_id}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm text-gray-900">{record.diagnosis}</div>
                                    <div className="text-sm text-gray-500 truncate max-w-xs" title={record.notes}>
                                        {record.notes}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {record.test_results}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2 text-sm text-gray-900">
                                        <Calendar size={16} className="text-gray-400" />
                                        {new Date(record.next_visit).toLocaleDateString()}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex gap-3">
                                        <button className="text-blue-600 hover:text-blue-800">
                                            <Pencil size={18} />
                                        </button>
                                        <button className="text-red-600 hover:text-red-800">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6 mt-4">
                <div className="flex justify-between w-full">
                    <div className="text-sm text-gray-700">
                        Showing <span className="font-medium">{filteredRecords.length}</span> records
                    </div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border rounded hover:bg-gray-50">Previous</button>
                        <button className="px-3 py-1 border rounded bg-blue-50 text-blue-600">1</button>
                        <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalRecords;