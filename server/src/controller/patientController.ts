import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import pool from '../../db';
import { patientQueries } from '../queries/patientQueries';

interface Patient {
    patient_id: number;
    first_name: string;
    last_name: string;
    date_of_birth: Date;  // Changed to Date type
    gender?: string;      // Optional fields marked with ?
    address?: string;
    phone_number?: string;
    email?: string;
}

export const getPatients = async (req: Request, res: Response): Promise<void> => {
    try {
        const results: QueryResult<Patient> = await pool.query(patientQueries.getPatients);
        res.status(200).json(results.rows);
    } catch (error) {
        console.error('Error fetching patients:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'An error occurred while fetching patients'
        });
    }
};

export const getPatientById = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try {
        const result: QueryResult<Patient> = await pool.query(patientQueries.getPatientById, [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ message: 'Patient not found' });
            return;
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching patient:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'An error occurred while fetching patient'
        });
    }
};

export const addPatient = async (req: Request, res: Response): Promise<void> => {
    const { first_name, last_name, date_of_birth, gender, address, phone_number, email } = req.body;
    try {
        const result: QueryResult<Patient> = await pool.query(
            patientQueries.addPatient,
            [first_name, last_name, date_of_birth, gender, address, phone_number, email]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error adding patient:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'An error occurred while adding patient'
        });
    }
};

export const patientController = {
    getPatients,
    getPatientById,
    addPatient
};