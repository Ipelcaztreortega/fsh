// controller/patientController.ts

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
export const updatePatient = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try {
        // First get the existing patient
        const existingPatient = await pool.query(patientQueries.getPatientById, [id]);
        if (existingPatient.rows.length === 0) {
            res.status(404).json({ message: 'Patient not found' });
            return;
        }

        // Merge existing data with updates
        const currentData = existingPatient.rows[0];
        const updatedData = {
            first_name: req.body.first_name ?? currentData.first_name,
            last_name: req.body.last_name ?? currentData.last_name,
            date_of_birth: req.body.date_of_birth ?? currentData.date_of_birth,
            gender: req.body.gender ?? currentData.gender,
            address: req.body.address ?? currentData.address,
            phone_number: req.body.phone_number ?? currentData.phone_number,
            email: req.body.email ?? currentData.email
        };

        const result = await pool.query(
            patientQueries.updatePatient,
            [
                updatedData.first_name,
                updatedData.last_name,
                updatedData.date_of_birth,
                updatedData.gender,
                updatedData.address,
                updatedData.phone_number,
                updatedData.email,
                id
            ]
        );

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error updating patient:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'An error occurred while updating patient'
        });
    }
};
export const deletePatient = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try {
        await pool.query(patientQueries.deletePatient, [id]);
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting patient:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'An error occurred while deleting patient'
        });
    }
};

// Add these to your exported controller object
export const patientController = {
    getPatients,
    getPatientById,
    addPatient,
    updatePatient,  // Add this
    deletePatient   // Add this
};