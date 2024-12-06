import { Router } from 'express';
import { medicalRecordController } from '../controller/medicalRecordController';

const router = Router();

router.get('/medical-records', medicalRecordController.getMedicalRecords);
router.get('/medical-records/:id', medicalRecordController.getMedicalRecordById);

export default router;