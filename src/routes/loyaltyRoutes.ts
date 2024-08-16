import { Router } from 'express';
import { LoyaltyController } from '../controllers/loyaltyController';

const router = Router();
const loyaltyController = new LoyaltyController();

router.get('/loyalties', loyaltyController.getAllLoyalties);
router.post('/loyalties', loyaltyController.createLoyalty);
router.put('/loyalties/:id', loyaltyController.updateLoyalty);
router.delete('/loyalties/:id', loyaltyController.deleteLoyalty);

export default router;
