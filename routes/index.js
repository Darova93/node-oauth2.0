import express from 'express';
import searchRoutes from './search.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const router = express.Router();
router.use('/search', searchRoutes);

if (process.env.NODE_ENV === 'development') {
  router.use('/api-docs', swaggerUi.serve);
  router.get('/api-docs', swaggerUi.setup(swaggerDocument));
}

export default router;
