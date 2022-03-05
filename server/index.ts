import express, { Request, Response } from 'express';
import next from 'next';
import path from 'path';

const envPort = process.env.PORT;
const port = envPort ? parseInt(envPort, 10) : 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.static(path.resolve('./src/public')));

  server.get('*', (req: Request, res: Response) => handle(req, res));

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
