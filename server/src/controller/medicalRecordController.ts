// controller/doctorController.ts
import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import pool from '../../db';
import { medicalRecordQueries} from '../queries/medicalRecordQueries';

interface MedicalRecord {
    record_id: number;
    patient_id: number;
    doctor_id: number;
    diagnosis: string;
    notes: string;
    test_results: string;
    next_visit: string;
}

export const getMedicalRecords = async (req: Request, res: Response): Promise<void> => {
    try {
        const results: QueryResult<MedicalRecord> = await pool.query(medicalRecordQueries.getMedicalRecords);
        res.status(200).json(results.rows);
    } catch (error) {
        console.error('Error fetching Medical Records:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'An error occurred while fetching Medical Records'
        });
    }
};

export const getMedicalRecordById = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try {
        const result: QueryResult<MedicalRecord> = await pool.query(medicalRecordQueries.getMedicalRecordById, [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ message: 'Medical Record not found' });
            return;
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching Medical Records:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'An error occurred while fetching Medical Record'
        });
    }
};

export const medicalRecordController = {
    getMedicalRecords,
    getMedicalRecordById,
};