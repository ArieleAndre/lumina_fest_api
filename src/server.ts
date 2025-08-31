import express from 'express';
import type { Request, Response } from 'express';
import router from './router';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World from Express + TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});