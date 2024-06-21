import express from 'express';
import { ping, submit, read } from './db';

const router = express.Router();

router.get('/ping', ping);
router.post('/submit', submit);
router.get('/read', read);

export default router;
