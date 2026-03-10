export type WeatherData = {
  city: string;
  country: string;
  temperature: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  dateTime: number;
};

export type ForecastDay = {
  dateLabel: string;
  tempMin: number;
  tempMax: number;
  condition: string;
  icon: string;
};
