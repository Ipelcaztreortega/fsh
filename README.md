# Hospital Management System

A modern web application for managing hospital operations including patient records, doctor schedules, and appointments.

## Features

- **Patient Management**
  - View and manage patient records
  - Add new patients
  - Update patient information
  - Delete patient records
  - Search functionality

- **Appointment System**
  - Schedule new appointments
  - View all appointments
  - Filter appointments by date
  - Manage appointment status

- **Doctor Management**
  - View all doctors
  - Manage doctor schedules
  - Track doctor specializations

## Technology Stack

- **Frontend**
  - React.js with TypeScript
  - Tailwind CSS for styling
  - Lucide React for icons
  - React Router for navigation

- **Backend**
  - (Add your backend technology here)
  - RESTful API architecture
  - PostgreSQL database

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Git

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd hospital-management-system
```

2. Install dependencies:
```bash
cd client
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` file with your configuration.

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
client/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components
│   │   ├── Appointments/
│   │   ├── Patients/
│   │   └── Doctors/
│   ├── services/      # API service calls
│   ├── types/         # TypeScript interfaces
│   └── utils/         # Utility functions
├── public/            # Static files
└── ...
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Database Schema

### Patients Table
```sql
CREATE TABLE patients (
    patient_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    date_of_birth DATE
);
```

### Appointments Table
```sql
CREATE TABLE appointments (
    appointment_id SERIAL PRIMARY KEY,
    patient_id INTEGER REFERENCES patients(patient_id),
    doctor_id INTEGER REFERENCES doctors(doctor_id),
    appointment_date DATE,
    appointment_time TIME,
    info TEXT
);
```

## API Endpoints

### Patients
- `GET /api/patients` - Get all patients
- `POST /api/patients` - Create new patient
- `PUT /api/patients/:id` - Update patient
- `DELETE /api/patients/:id` - Delete patient

### Appointments
- `GET /api/appointments` - Get all appointments
- `POST /api/appointments` - Create new appointment
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Delete appointment

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Advanced search and filtering
- [ ] Medical records management
- [ ] Prescription system
- [ ] Billing integration
- [ ] Report generation
- [ ] Mobile application
