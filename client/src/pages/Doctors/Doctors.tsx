import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter, Pencil, Trash2, Building2, Loader2 } from 'lucide-react';

interface Doctor {
    doctor_id: number;
    first_name: string;
    last_name: string;
    department_id: number;
    // Additional field for display
    department_name?: string;
}

const Doctors: React.FC = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([
        {
            doctor_id: 1,
            first_name: "Sarah",
            last_name: "Wilson",
            department_id: 1,
            department_name: "Cardiology"
        },
        {
            doctor_id: 2,
            first_name: "Michael",
            last_name: "Brown",
            department_id: 2,
            department_name: "Neurology"
        },
        {
            doctor_id: 3,
            first_name: "Emily",
            last_name: "Davis",
            department_id: 3,
            department_name: "Pediatrics"
        },
        {
            doctor_id: 4,
            first_name: "James",
            last_name: "Taylor",
            department_id: 4,
            department_name: "Orthopedics"
        },
        {
            doctor_id: 5,
            first_name: "Lisa",
            last_name: "Anderson",
            department_id: 5,
            department_name: "Dermatology"
        }
    ]);

    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState<string>('');

    const departments = [
        { id: 1, name: 'Cardiology' },
        { id: 2, name: 'Neurology' },
        { id: 3, name: 'Pediatrics' },
        { id: 4, name: 'Orthopedics' },
        { id: 5, name: 'Dermatology' }
    ];

    const filteredDoctors = doctors.filter(doctor => {
        const matchesSearch = `${doctor.first_name} ${doctor.last_name}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesDepartment = selectedDepartment 
            ? doctor.department_name === selectedDepartment
            : true;
        return matchesSearch && matchesDepartment;
    });

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Doctors Management</h1>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Plus size={20} />
                    <span>Add Doctor</span>
                </button>
            </div>

            {/* Search and Filter Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search doctors..."
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <select
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                    >
                        <option value="">All Departments</option>
                        {departments.map(dept => (
                            <option key={dept.id} value={dept.name}>
                                {dept.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Doctors Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Department
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredDoctors.map((doctor) => (
                            <tr key={doctor.doctor_id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    #{doctor.doctor_id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        {doctor.first_name} {doctor.last_name}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                        {doctor.department_name}
                                    </span>
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
                        Showing <span className="font-medium">{filteredDoctors.length}</span> doctors
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

export default Doctors;