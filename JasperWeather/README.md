# JasperWeather

JasperWeather is an Expo React Native weather application with GPS-based weather, city search, 5-day forecast, multilingual support, animated UI, and light/dark themes.

## Features

- Current weather by device location
- Search weather by city name
- 5-day forecast
- Humidity and wind speed metrics
- Light and dark theme toggle
- Multi-language support: English, Spanish, Hindi
- Animated loading skeletons and UI transitions
- EAS build configuration for cloud builds

## Tech Stack

- React Native
- Expo
- Expo Router
- Redux Toolkit
- Axios
- Expo Location
- i18n-js

## Prerequisites

- Node.js 18 or newer
- npm 9 or newer
- Expo Go on a physical device, or Android Studio / Xcode simulator setup
- An OpenWeather API key

## Clone And Setup

1. Clone the repository:

```bash
git clone https://github.com/umasankara2705/JasperColin.git
cd JasperColin/JasperWeather
```

2. Install dependencies:

```bash
npm install
```

3. Create the environment file:

```bash
cp .env.example .env
```

4. Add your OpenWeather API key in `.env`:

```env
EXPO_PUBLIC_OPENWEATHER_API_KEY=your_openweather_api_key_here
```

## Run The App

Start the Expo development server:

```bash
npm start
```

You can also run directly on a target platform:

```bash
npm run android
npm run ios
npm run web
```

## Available Scripts

```bash
npm start
npm run android
npm run ios
npm run web
npm run lint
```

## Project Structure

```text
app/                       Expo Router screens
src/components/weather/    Reusable weather UI components
src/store/                 Redux store and weather slice
src/services/              API integration layer
src/i18n/                  Localization setup
src/types/                 Shared TypeScript types
assets/images/             Logo, splash, icons
```

## Environment Notes

- The app reads `EXPO_PUBLIC_OPENWEATHER_API_KEY` at runtime for weather requests.
- `.env` is intentionally ignored by git.
- `.env.example` is safe to commit and should be used as the template.

## Troubleshooting

### API key error

If you see a missing or invalid API key error:

1. Confirm `.env` exists in the `JasperWeather` root.
2. Confirm the variable name is exactly `EXPO_PUBLIC_OPENWEATHER_API_KEY`.
3. Restart Expo with cache clear:

```bash
npx expo start -c
```

### Location not working

- Make sure location permission is granted on the device/emulator.
- Android requires location services enabled on the emulator/device.

### Asset or config changes not reflecting

Restart Expo with a cleared cache:

```bash
npx expo start -c
```

## Build

This project is configured for EAS Build.

Preview Android build example:

```bash
npx eas-cli build --platform android --profile preview
```

## Lint

Run lint checks with:

```bash
npm run lint
```
