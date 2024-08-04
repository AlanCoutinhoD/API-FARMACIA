import express from 'express';
import { createSale } from '../controllers/sales.controller.js';
import { getSales } from '../controllers/sales.controller.js';
import {deleteSale } from '../controllers/sales.controller.js';
import {updateSaleController} from '../controllers/sales.controller.js';
import { getSaleByIdController } from '../controllers/sales.controller.js';
const router = express.Router();

router.post('/addSale', createSale);
router.get('/sales',  getSales);
router.delete('/sales/:id_venta', deleteSale);
router.put('/sales/:id', updateSaleController);
router.get('/sales/:id', getSaleByIdController);
export default router;