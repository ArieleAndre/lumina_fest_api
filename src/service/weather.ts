import axios from "axios";
import { OpenMeteoResponse, WeatherResponse } from "../interfaces/weather.interface";

export async function getWeather(startDate: string, endDate: string): Promise<WeatherResponse[]> {
    const LAT = -27.3169;
    const LON = -49.6347;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&hourly=temperature_2m,relative_humidity_2m,rain&start_date=${startDate}&end_date=${endDate}`;

    const { data } = await axios.get<OpenMeteoResponse>(url);
    const daysMap: Record<string, any[]> = {};

    data.hourly.time.forEach((t: string, idx: number) => {
      const date = new Date(t);
      const hour = date.getHours();

      if (hour >= 12 && hour <= 17) {
        const day = t.split("T")[0];
        if (!daysMap[day]) daysMap[day] = [];

        daysMap[day].push({
          hour: `${hour.toString().padStart(2, "0")}:00`,
          temperature: data.hourly.temperature_2m[idx],
          humidity: data.hourly.relative_humidity_2m[idx],
          rain: data.hourly.rain[idx]
        });
      }
    });

    const result = Object.entries(daysMap).map(([day, weather]) => ({
      day,
      weather
    }));

    return result;
}