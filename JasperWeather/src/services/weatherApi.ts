import axios from "axios";

import { i18n } from "@/src/i18n";
import { ForecastDay, WeatherData } from "@/src/types/weather";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

type CurrentWeatherResponse = {
  dt: number;
  name: string;
  weather: { main: string; description: string; icon: string }[];
  main: { temp: number; humidity: number };
  wind: { speed: number };
  sys: { country: string };
};

type ForecastResponse = {
  list: {
    dt: number;
    dt_txt: string;
    main: { temp_min: number; temp_max: number };
    weather: { main: string; icon: string }[];
  }[];
};

function toWeatherData(data: CurrentWeatherResponse): WeatherData {
  const current = data.weather[0];

  return {
    city: data.name,
    country: data.sys.country,
    temperature: Math.round(data.main.temp),
    condition: current?.main ?? "Unknown",
    description: current?.description ?? "",
    humidity: data.main.humidity,
    windSpeed: Math.round(data.wind.speed * 3.6),
    icon: current?.icon ?? "01d",
    dateTime: data.dt,
  };
}

function toForecastDays(data: ForecastResponse): ForecastDay[] {
  const byDate = new Map<string, ForecastDay>();

  for (const item of data.list) {
    const date = item.dt_txt.split(" ")[0];

    if (byDate.has(date)) {
      continue;
    }

    const weather = item.weather[0];
    byDate.set(date, {
      dateLabel: new Date(item.dt * 1000).toLocaleDateString(i18nLocale(), {
        weekday: "short",
        month: "short",
        day: "numeric",
      }),
      tempMin: Math.round(item.main.temp_min),
      tempMax: Math.round(item.main.temp_max),
      condition: weather?.main ?? "Unknown",
      icon: weather?.icon ?? "01d",
    });

    if (byDate.size === 5) {
      break;
    }
  }

  return Array.from(byDate.values());
}

function i18nLocale(): string {
  return i18n.locale || "en";
}

function apiLanguage(): string {
  return i18n.locale.slice(0, 2).toLowerCase();
}

function getApiKey(): string {
  const key = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY?.trim();
  if (!key) {
    throw new Error("MISSING_API_KEY");
  }

  return key;
}

export async function fetchCurrentWeatherByCoords(
  lat: number,
  lon: number,
): Promise<WeatherData> {
  const apiKey = getApiKey();
  const response = await api.get<CurrentWeatherResponse>("/weather", {
    params: {
      lat,
      lon,
      appid: apiKey,
      units: "metric",
      lang: apiLanguage(),
    },
  });

  return toWeatherData(response.data);
}

export async function fetchCurrentWeatherByCity(city: string): Promise<WeatherData> {
  const apiKey = getApiKey();
  const response = await api.get<CurrentWeatherResponse>("/weather", {
    params: {
      q: city,
      appid: apiKey,
      units: "metric",
      lang: apiLanguage(),
    },
  });

  return toWeatherData(response.data);
}

export async function fetchForecastByCoords(
  lat: number,
  lon: number,
): Promise<ForecastDay[]> {
  const apiKey = getApiKey();
  const response = await api.get<ForecastResponse>("/forecast", {
    params: {
      lat,
      lon,
      appid: apiKey,
      units: "metric",
      lang: apiLanguage(),
    },
  });

  return toForecastDays(response.data);
}

export async function fetchForecastByCity(city: string): Promise<ForecastDay[]> {
  const apiKey = getApiKey();
  const response = await api.get<ForecastResponse>("/forecast", {
    params: {
      q: city,
      appid: apiKey,
      units: "metric",
      lang: apiLanguage(),
    },
  });

  return toForecastDays(response.data);
}
