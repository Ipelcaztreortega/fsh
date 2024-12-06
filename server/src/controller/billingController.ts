// controller/doctorController.ts
import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import pool from '../../db';
import { billingQueries } from '../queries/billingQueries';

interface Billing {
    billing_id: number;
    patient_id: number;
    doctor_id: number;
    record_date: string;
    patient_first_name: string;
    patient_last_name: string;
    doctor_first_name: string;
    doctor_last_name: string;
}

export const getBillings = async (req: Request, res: Response): Promise<void> => {
    try {
        const results: QueryResult<Billing> = await pool.query(billingQueries.getBillings);
        res.status(200).json(results.rows);
    } catch (error) {
        console.error('Error fetching Billings:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'An error occurred while fetching Billings'
        });
    }
};

export const getBillingById = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try {
        const result: QueryResult<Billing> = await pool.query(billingQueries.getBillingById, [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ message: 'Billing not found' });
            return;
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching billing:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'An error occurred while fetching billing'
        });
    }
};

export const billingController = {
    getBillings,
    getBillingById,
};