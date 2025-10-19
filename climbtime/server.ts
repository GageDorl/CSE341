import cors from 'cors';
import express from 'express';
const app = express();
import routes from './routes/index.ts';
import swaggerUI from 'swagger-ui-express';
import swaggerFile from './swagger.json' assert { type: 'json' };

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', routes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}...`);
});