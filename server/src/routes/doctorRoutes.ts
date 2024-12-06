import { Router } from 'express';
import { doctorController } from '../controller/doctorController';

const router = Router();

router.get('/doctors', doctorController.getDoctors);
router.get('/doctors/:id', doctorController.getDoctorById);

export default router;