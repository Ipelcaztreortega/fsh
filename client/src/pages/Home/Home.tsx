import React from 'react';
import { Users, Stethoscope, Calendar, ClipboardList, ChartBar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}> = ({ icon, title, description, link }) => (
  <Link 
    to={link}
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <div className="flex items-center gap-4">
      <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  </Link>
);

const Home: React.FC = () => {
  const features = [
    {
      icon: <Users size={24} />,
      title: "Patient Management",
      description: "Register and manage patient records, medical history, and personal information",
      link: "/patients"
    },
    {
      icon: <Stethoscope size={24} />,
      title: "Doctor Directory",
      description: "Access complete doctors' profiles, specializations, and schedules",
      link: "/doctors"
    },
    {
      icon: <Calendar size={24} />,
      title: "Appointment Scheduling",
      description: "Schedule and manage patient appointments with doctors",
      link: "/appointments"
    },
    {
      icon: <ClipboardList size={24} />,
      title: "Medical Records",
      description: "Maintain digital records of patient diagnoses and treatments",
      link: "/records"
    },
    {
      icon: <ChartBar size={24} />,
      title: "Analytics Dashboard",
      description: "View hospital statistics and performance metrics",
      link: "/analytics"
    },
    {
      icon: <Clock size={24} />,
      title: "Schedule Management",
      description: "Manage doctor availability and working hours",
      link: "/schedules"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hospital Management System
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Streamline your hospital operations with our comprehensive management solution
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            link={feature.link}
          />
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-16 bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          System Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600 mt-1">Patients Registered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="text-gray-600 mt-1">Medical Staff</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">100+</div>
            <div className="text-gray-600 mt-1">Daily Appointments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;