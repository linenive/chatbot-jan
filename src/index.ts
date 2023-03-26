import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';

const app: Application = express();
const port = 3000;

app.use(morgan('dev'));

app.get('/hello', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
