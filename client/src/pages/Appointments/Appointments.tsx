import React, { useState } from 'react';
import { Calendar, Clock, Search, Plus, Filter, MoreVertical } from 'lucide-react';

interface Appointment {
  appointment_id: number;
  patient_id: number;
  doctor_id: number;
  appointment_date: string;
  appointment_time: string;
  info: string;
  // Additional fields for display purposes
  patientName: string;  // We'll need to join with patients table
  doctorName: string;   // We'll need to join with doctors table
}

const Appointments: React.FC = () => {
  // Sample data - replace with actual data from your backend
  const [appointments] = useState<Appointment[]>([
    {
      appointment_id: 1,
      patient_id: 101,
      doctor_id: 201,
      appointment_date: '2024-12-02',
      appointment_time: '09:00:00',
      info: 'Regular checkup',
      patientName: 'John Doe',
      doctorName: 'Dr. Sarah Wilson'
    },
    {
      appointment_id: 2,
      patient_id: 102,
      doctor_id: 202,
      appointment_date: '2024-12-02',
      appointment_time: '10:30:00',
      info: 'Follow-up consultation',
      patientName: 'Jane Smith',
      doctorName: 'Dr. Michael Brown'
    },
    {
      appointment_id: 3,
      patient_id: 103,
      doctor_id: 203,
      appointment_date: '2024-12-02',
      appointment_time: '14:00:00',
      info: 'Initial consultation',
      patientName: 'Robert Johnson',
      doctorName: 'Dr. Emily Davis'
    },
  ]);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus size={20} />
          <span>New Appointment</span>
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="col-span-2 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search appointments..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      {/* Appointments Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Doctor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Info
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <tr key={appointment.appointment_id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  #{appointment.appointment_id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{appointment.patientName}</div>
                  <div className="text-gray-500 text-sm">ID: {appointment.patient_id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-gray-900">{appointment.doctorName}</div>
                  <div className="text-gray-500 text-sm">ID: {appointment.doctor_id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-gray-400" />
                    <span className="text-gray-900">{appointment.appointment_date}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-400" />
                    <span className="text-gray-900">{appointment.appointment_time}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-gray-900">{appointment.info}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreVertical size={20} />
                  </button>
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
            Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of{' '}
            <span className="font-medium">3</span> results
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

export default Appointments;