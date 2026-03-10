import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import * as Location from "expo-location";

import { i18n } from "@/src/i18n";
import {
  fetchCurrentWeatherByCity,
  fetchCurrentWeatherByCoords,
  fetchForecastByCity,
  fetchForecastByCoords,
} from "@/src/services/weatherApi";
import { ForecastDay, WeatherData } from "@/src/types/weather";

type WeatherState = {
  loading: boolean;
  error: string | null;
  weather: WeatherData | null;
  forecast: ForecastDay[];
  query: string;
  lastFetchMode: "gps" | "city";
};

const initialState: WeatherState = {
  loading: false,
  error: null,
  weather: null,
  forecast: [],
  query: "",
  lastFetchMode: "gps",
};

type WeatherPayload = {
  weather: WeatherData;
  forecast: ForecastDay[];
  mode: "gps" | "city";
};

function mapError(error: unknown): string {
  if (isAxiosError(error)) {
    if (error.response?.status === 404) {
      return i18n.t("cityNotFound");
    }
    if (error.response?.status === 401) {
      return i18n.t("invalidApiKey");
    }
  }

  if (error instanceof Error && error.message === "MISSING_API_KEY") {
    return i18n.t("missingApiKey");
  }

  return i18n.t("genericError");
}

export const fetchWeatherByLocation = createAsyncThunk<
  WeatherPayload,
  void,
  { rejectValue: string }
>("weather/fetchByLocation", async (_, { rejectWithValue }) => {
  try {
    const permission = await Location.requestForegroundPermissionsAsync();
    if (!permission.granted) {
      return rejectWithValue(i18n.t("permissionDenied"));
    }

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });

    const [weather, forecast] = await Promise.all([
      fetchCurrentWeatherByCoords(location.coords.latitude, location.coords.longitude),
      fetchForecastByCoords(location.coords.latitude, location.coords.longitude),
    ]);

    return { weather, forecast, mode: "gps" };
  } catch (error) {
    return rejectWithValue(mapError(error));
  }
});

export const fetchWeatherByCity = createAsyncThunk<
  WeatherPayload,
  string | undefined,
  { state: { weather: WeatherState }; rejectValue: string }
>("weather/fetchByCity", async (cityOverride, { getState, rejectWithValue }) => {
  const city = (cityOverride ?? getState().weather.query).trim();
  if (!city) {
    return rejectWithValue(i18n.t("noCity"));
  }

  try {
    const [weather, forecast] = await Promise.all([
      fetchCurrentWeatherByCity(city),
      fetchForecastByCity(city),
    ]);

    return { weather, forecast, mode: "city" };
  } catch (error) {
    return rejectWithValue(mapError(error));
  }
});

export const refreshWeather = createAsyncThunk<
  void,
  void,
  { state: { weather: WeatherState } }
>("weather/refresh", async (_, { dispatch, getState }) => {
  if (getState().weather.lastFetchMode === "city") {
    await dispatch(fetchWeatherByCity(undefined));
    return;
  }

  await dispatch(fetchWeatherByLocation());
});

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherByLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload.weather;
        state.forecast = action.payload.forecast;
        state.lastFetchMode = action.payload.mode;
      })
      .addCase(fetchWeatherByLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? i18n.t("genericError");
      })
      .addCase(fetchWeatherByCity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherByCity.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload.weather;
        state.forecast = action.payload.forecast;
        state.lastFetchMode = action.payload.mode;
      })
      .addCase(fetchWeatherByCity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? i18n.t("genericError");
      });
  },
});

export const { setQuery } = weatherSlice.actions;
export default weatherSlice.reducer;
