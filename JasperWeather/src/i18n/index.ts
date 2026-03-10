import { I18n } from "i18n-js";

export type AppLanguage = "en" | "es" | "hi";

const SUPPORTED_LANGUAGES: AppLanguage[] = ["en", "es", "hi"];

function normalizeLocale(locale: string): AppLanguage {
  const shortLocale = locale.slice(0, 2).toLowerCase() as AppLanguage;
  if (SUPPORTED_LANGUAGES.includes(shortLocale)) {
    return shortLocale;
  }

  return "en";
}

const initialLocale = normalizeLocale(Intl.DateTimeFormat().resolvedOptions().locale ?? "en");

const i18n = new I18n({
  en: {
    appTitle: "Weather",
    subtitle: "Live conditions and short-range forecast",
    language: "Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    useMyLocation: "Use My Location",
    searchPlaceholder: "Search city...",
    search: "Search",
    refresh: "Refresh",
    humidity: "Humidity",
    windSpeed: "Wind",
    forecast5Day: "5-Day Forecast",
    kmh: "km/h",
    celsius: "C",
    permissionDenied:
      "Location access denied. Search by city or enable location permission.",
    missingApiKey:
      "Missing API key. Set EXPO_PUBLIC_OPENWEATHER_API_KEY in your environment.",
    invalidApiKey: "Invalid API key. Verify your OpenWeather key and try again.",
    noCity: "Please enter a city name.",
    cityNotFound: "City not found. Check spelling and try again.",
    genericError: "Unable to fetch weather data right now. Please try again.",
  },
  es: {
    appTitle: "Clima",
    subtitle: "Condiciones en vivo y pronóstico de corto plazo",
    language: "Idioma",
    theme: "Tema",
    light: "Claro",
    dark: "Oscuro",
    useMyLocation: "Usar mi ubicación",
    searchPlaceholder: "Buscar ciudad...",
    search: "Buscar",
    refresh: "Actualizar",
    humidity: "Humedad",
    windSpeed: "Viento",
    forecast5Day: "Pronóstico de 5 días",
    kmh: "km/h",
    celsius: "C",
    permissionDenied:
      "Permiso de ubicación denegado. Busca por ciudad o habilita el permiso.",
    missingApiKey:
      "Falta la clave API. Configura EXPO_PUBLIC_OPENWEATHER_API_KEY.",
    invalidApiKey: "Clave API inválida. Verifica tu clave de OpenWeather.",
    noCity: "Ingresa una ciudad.",
    cityNotFound: "Ciudad no encontrada. Verifica e inténtalo otra vez.",
    genericError:
      "No se pueden obtener los datos del clima ahora. Inténtalo nuevamente.",
  },
  hi: {
    appTitle: "मौसम",
    subtitle: "लाइव मौसम और अल्पकालिक पूर्वानुमान",
    language: "भाषा",
    theme: "थीम",
    light: "लाइट",
    dark: "डार्क",
    useMyLocation: "मेरी लोकेशन",
    searchPlaceholder: "शहर खोजें...",
    search: "खोजें",
    refresh: "रीफ्रेश",
    humidity: "नमी",
    windSpeed: "हवा",
    forecast5Day: "5 दिन का पूर्वानुमान",
    kmh: "किमी/घंटा",
    celsius: "C",
    permissionDenied:
      "लोकेशन अनुमति अस्वीकार की गई। शहर से खोजें या अनुमति सक्षम करें।",
    missingApiKey:
      "API key नहीं मिली। EXPO_PUBLIC_OPENWEATHER_API_KEY सेट करें।",
    invalidApiKey: "API key अमान्य है। अपनी OpenWeather key जांचें।",
    noCity: "कृपया शहर का नाम दर्ज करें।",
    cityNotFound: "शहर नहीं मिला। वर्तनी जांचकर फिर से प्रयास करें।",
    genericError: "अभी मौसम डेटा नहीं मिल सका। कृपया फिर प्रयास करें।",
  },
});

i18n.enableFallback = true;
i18n.defaultLocale = "en";
i18n.locale = initialLocale;

export function setAppLocale(locale: AppLanguage) {
  i18n.locale = locale;
}

export function getAppLocale(): AppLanguage {
  return normalizeLocale(i18n.locale);
}

export { i18n };
