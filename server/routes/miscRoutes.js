import { Router } from 'express';
import {contactUs
    // ,userStats
} from '../controllers/miscController.js';
// import { authorizedRoles, isLoggedIn } from '../middleware/authMiddleware.js';

const router = Router();

router.route('/contact').post(contactUs);
// router.route('/admin/stats/users').get(isLoggedIn, authorizedRoles('ADMIN'), userStats);

export default router;
