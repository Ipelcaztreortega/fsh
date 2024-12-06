import { Router } from 'express';
import { appointmentController } from '../controller/appointmentController';

const router = Router();

router.get('/appointments', appointmentController.getAppointments);
router.get('/appointments/:id', appointmentController.getAppointmentById);

export default router;