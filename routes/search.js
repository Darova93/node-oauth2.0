import express from 'express';
import searchCtrl from '../controllers/search.js';

const router = express.Router();
router.get('/movie/:title', searchCtrl.searchMovie);

export default router;
