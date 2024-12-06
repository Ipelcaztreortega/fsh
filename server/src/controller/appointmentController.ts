
import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import pool from '../../db';

import { appointmentQueries } from '../queries/appointmentQueries';

interface Appointment {
    appointment_id: number;
    patient_id: number;
    doctor_id: number;
    appointment_date: Date;
    appointment_time: string;
    info: string;
}

export const getAppointments = async (req: Request, res: Response): Promise<void> => {
    try {
        const results: QueryResult<Appointment> = await pool.query(appointmentQueries.getAppointments);
        res.status(200).json(results.rows);
    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'An error occurred while fetching  appointments'
        });
    }
};

export const getAppointmentById = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try {
        const result: QueryResult<Appointment> = await pool.query(appointmentQueries.getAppointmentById, [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ message: 'Appointment not found' });
            return;
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching  appointment:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'An error occurred while fetching appointment'
        });
    }
};

export const appointmentController = {
    getAppointments,
    getAppointmentById,
};
