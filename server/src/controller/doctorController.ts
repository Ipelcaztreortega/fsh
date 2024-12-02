import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import pool from '../../db';
import { doctorQueries } from '../queries/doctorQueries';

interface Doctor {
    doctor_id: number;
    first_name: string;
    last_name: string;
    department_id: number;
}

export const getDoctors = async (req: Request, res: Response): Promise<void> => {
    try {
        const results: QueryResult<Doctor> = await pool.query(doctorQueries.getDoctors);
        res.status(200).json(results.rows);
    } catch (error) {
        console.error('Error fetching doctors:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'An error occurred while fetching doctors'
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

export const addDoctor = async (req: Request, res: Response): Promise<void> => {
    const { first_name, last_name, department_id } = req.body;
    try {
        const result: QueryResult<Doctor> = await pool.query(
            doctorQueries.addDoctor,
            [first_name, last_name, department_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error adding doctor:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'An error occurred while adding doctor'
        });
    }
};

export const updateDoctor = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const { first_name, last_name, department_id } = req.body;
    try {
        const result: QueryResult<Doctor> = await pool.query(
            doctorQueries.updateDoctor,
            [first_name, last_name, department_id, id]
        );
        if (result.rows.length === 0) {
            res.status(404).json({ message: 'Doctor not found' });
            return;
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error updating doctor:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'An error occurred while updating doctor'
        });
    }
};

export const deleteDoctor = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try {
        const result: QueryResult<Doctor> = await pool.query(doctorQueries.deleteDoctor, [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ message: 'Doctor not found' });
            return;
        }
        res.status(200).json({ message: 'Doctor deleted successfully' });
    } catch (error) {
        console.error('Error deleting doctor:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'An error occurred while deleting doctor'
        });
    }
};

export const doctorController = {
    getDoctors,
    getDoctorById,
    addDoctor,
    updateDoctor,
    deleteDoctor
};