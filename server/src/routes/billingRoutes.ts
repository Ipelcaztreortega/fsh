import { Router } from 'express';
import { billingController } from '../controller/billingController';

const router = Router();

router.get('/billings', billingController.getBillings);
router.get('/billings/:id', billingController.getBillingById);

export default router;