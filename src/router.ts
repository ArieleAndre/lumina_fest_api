import { Router, Request, Response } from 'express';
import { getWeather } from './service/weather';


const router = Router();

router.get('/weather', async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'Parâmetros "start" e "end" são obrigatórios' });
    }

    res.json( await getWeather(startDate as string , endDate as string));
  } catch (error) {
    console.error('Erro ao buscar previsão:', error);
    res.status(500).json({ error: 'Erro ao buscar previsão do tempo' });
  }
});

export default router;