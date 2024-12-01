import { Router } from 'express';
import { patientController } from '../controller/patientController';

const router = Router();

router.get('/patients', patientController.getPatients);
router.get('/patients/:id', patientController.getPatientById);
router.post('/patients', patientController.addPatient);

export default router;