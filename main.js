import express from 'express';
import {json, urlencoded} from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js';

dotenv.config();
const port = process.env.SERVER_PORT || 4000;
const app = express();

app.use(json({limit: '50mb'}));
app.use(urlencoded({limit: '50mb', extended: true}));
// To enable CORS => (Cross Origin Resource Sharing)
app.use(cors());
// Starting points for the routes
app.use('/api/', routes);

app.listen(port, () => {
  console.info(`Server started on port ${port}`);
});
