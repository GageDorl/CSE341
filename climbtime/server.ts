import cors from 'cors';
import express from 'express';
const app = express();
import routes from './routes/index.ts';
import swaggerUI from 'swagger-ui-express';
import swaggerFile from './swagger.json' assert { type: 'json' };
import { auth } from 'express-openid-connect';

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.secretKey,
    baseURL: process.env.BASE_URL,
    clientID: 'H0yKGiy57WfNNMMkPtjUTl64kGIrv1tN',
    issuerBaseURL: 'https://dev-kjpbnr84pxwgvc7n.us.auth0.com',
    routes: {
        login: '/login',
        callback: '/callback',
        logout: '/logout'
    }
}

app.use(auth(config));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const swaggerOptions = {
  swaggerOptions: {
    oauth2RedirectUrl: process.env.BASE_URL + '/api-docs/oauth2-redirect.html',
    persistAuthorization: true,
  },
};
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile, swaggerOptions));
app.use('/', routes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}...`);
});