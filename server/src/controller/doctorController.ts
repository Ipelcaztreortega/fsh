// controller/doctorController.ts
import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import pool from '../../db';
import { doctorQueries } from '../queries/doctorQueries';

interface Doctor {
    doctor_id: number;
    first_name: string;
    last_name: string;
    department_id: number;
    department_name: string;
    head_of_department: string;
}

export const getDoctors = async (req: Request, res: Response): Promise<void> => {
    try {
        const results: QueryResult<Doctor> = await pool.query(doctorQueries.getDoctors);
        res.status(200).json(results.rows);
    } catch (error) {
        console.error('Error fetching Doctors:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'An error occurred while fetching Doctors'
        });
    }
};

export const getDoctorById = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try {
        const result: QueryResult<Doctor> = await pool.query(doctorQueries.getDoctorById, [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ message: 'Doctor not found' });
            return;
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching doctor:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'An error occurred while fetching doctor'
        });
    }
};

export const doctorController = {
    getDoctors,
    getDoctorById,
};