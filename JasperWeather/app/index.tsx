import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useMemo, useRef, useState } from "react";
import { Animated, ScrollView, Text, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppLanguage, getAppLocale, setAppLocale } from "@/src/i18n";
import { ForecastSection } from "@/src/components/weather/ForecastSection";
import { HeroHeader } from "@/src/components/weather/HeroHeader";
import { LanguageSelector } from "@/src/components/weather/LanguageSelector";
import { SearchPanel } from "@/src/components/weather/SearchPanel";
import { SkeletonLoader } from "@/src/components/weather/SkeletonLoader";
import { WeatherCard } from "@/src/components/weather/WeatherCard";
import { createWeatherStyles } from "@/src/components/weather/styles";
import { THEMES, ThemeName } from "@/src/components/weather/theme";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import {
  fetchWeatherByCity,
  fetchWeatherByLocation,
  refreshWeather,
  setQuery,
} from "@/src/store/weatherSlice";

export default function Index() {
  const dispatch = useAppDispatch();
  const { loading, error, weather, forecast, query } = useAppSelector((state) => state.weather);
  const [selectedLanguage, setSelectedLanguage] = useState<AppLanguage>(getAppLocale());

  const systemScheme = useColorScheme();
  const [themeMode, setThemeMode] = useState<ThemeName>(systemScheme === "dark" ? "dark" : "light");

  const entry = useRef(new Animated.Value(0)).current;
  const floatAnim = useRef(new Animated.Value(0)).current;
  const iconPulse = useRef(new Animated.Value(1)).current;
  const refreshSpin = useRef(new Animated.Value(0)).current;
  const shimmerAnim = useRef(new Animated.Value(-1)).current;
  const themeAnim = useRef(new Animated.Value(themeMode === "dark" ? 1 : 0)).current;

  const theme = THEMES[themeMode];
  const styles = useMemo(() => createWeatherStyles(theme), [theme]);

  useEffect(() => {
    void dispatch(fetchWeatherByLocation());
  }, [dispatch]);

  useEffect(() => {
    Animated.timing(entry, {
      toValue: 1,
      duration: 850,
      useNativeDriver: true,
    }).start();
  }, [entry]);

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 1,
          duration: 2800,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 2800,
          useNativeDriver: true,
        }),
      ]),
    );

    animation.start();
    return () => animation.stop();
  }, [floatAnim]);

  useEffect(() => {
    if (!weather) {
      return;
    }

    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(iconPulse, {
          toValue: 1.08,
          duration: 1600,
          useNativeDriver: true,
        }),
        Animated.timing(iconPulse, {
          toValue: 1,
          duration: 1600,
          useNativeDriver: true,
        }),
      ]),
    );

    animation.start();
    return () => animation.stop();
  }, [iconPulse, weather]);

  useEffect(() => {
    let spinAnimation: Animated.CompositeAnimation | null = null;
    let shimmerAnimation: Animated.CompositeAnimation | null = null;

    if (loading) {
      refreshSpin.setValue(0);
      spinAnimation = Animated.loop(
        Animated.timing(refreshSpin, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
      );
      spinAnimation.start();

      shimmerAnim.setValue(-1);
      shimmerAnimation = Animated.loop(
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 1300,
          useNativeDriver: true,
        }),
      );
      shimmerAnimation.start();
    }

    return () => {
      spinAnimation?.stop();
      shimmerAnimation?.stop();
      refreshSpin.setValue(0);
      shimmerAnim.setValue(-1);
    };
  }, [loading, refreshSpin, shimmerAnim]);

  const topOrbTranslate = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -18],
  });

  const bottomOrbTranslate = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 15],
  });

  const rotate = refreshSpin.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const shimmerTranslate = shimmerAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: [-220, 220],
  });

  const themeRotate = themeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const onLanguagePress = (language: AppLanguage) => {
    if (language === selectedLanguage) {
      return;
    }

    setAppLocale(language);
    setSelectedLanguage(language);

    if (weather) {
      void dispatch(refreshWeather());
    }
  };

  const onThemeToggle = () => {
    const nextMode: ThemeName = themeMode === "dark" ? "light" : "dark";
    setThemeMode(nextMode);
    Animated.timing(themeAnim, {
      toValue: nextMode === "dark" ? 1 : 0,
      duration: 280,
      useNativeDriver: true,
    }).start();
  };

  return (
    <LinearGradient colors={theme.gradient} style={styles.gradient}>
      <SafeAreaView style={styles.safeArea}>
        <Animated.View
          style={[styles.orb, styles.orbTop, { transform: [{ translateY: topOrbTranslate }] }]}
        />
        <Animated.View
          style={[styles.orb, styles.orbBottom, { transform: [{ translateY: bottomOrbTranslate }] }]}
        />

        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <Animated.View
            style={[
              {
                opacity: entry.interpolate({ inputRange: [0, 0.35, 1], outputRange: [0, 1, 1] }),
                transform: [
                  {
                    translateY: entry.interpolate({ inputRange: [0, 1], outputRange: [24, 0] }),
                  },
                ],
              },
            ]}
          >
            <HeroHeader
              styles={styles}
              themeMode={themeMode}
              secondaryTextColor={theme.secondaryText}
              themeRotate={themeRotate}
              onToggleTheme={onThemeToggle}
            />
          </Animated.View>

          <LanguageSelector
            styles={styles}
            selectedLanguage={selectedLanguage}
            onPressLanguage={onLanguagePress}
          />

          <Animated.View
            style={[
              {
                opacity: entry.interpolate({ inputRange: [0.15, 0.55, 1], outputRange: [0, 1, 1] }),
                transform: [
                  {
                    translateY: entry.interpolate({ inputRange: [0, 1], outputRange: [22, 0] }),
                  },
                ],
              },
            ]}
          >
            <SearchPanel
              styles={styles}
              loading={loading}
              query={query}
              placeholderColor={theme.placeholder}
              secondaryTextColor={theme.secondaryText}
              rotate={rotate}
              onChangeQuery={(text) => dispatch(setQuery(text))}
              onSearch={() => void dispatch(fetchWeatherByCity(undefined))}
              onUseLocation={() => void dispatch(fetchWeatherByLocation())}
              onRefresh={() => void dispatch(refreshWeather())}
            />
          </Animated.View>

          {!loading && error ? (
            <Animated.View
              style={[
                styles.errorBox,
                {
                  opacity: entry.interpolate({ inputRange: [0.2, 0.7, 1], outputRange: [0, 1, 1] }),
                },
              ]}
            >
              <MaterialCommunityIcons name="alert-circle-outline" size={17} color={theme.errorText} />
              <Text style={styles.errorText}>{error}</Text>
            </Animated.View>
          ) : null}

          {loading ? (
            <SkeletonLoader
              styles={styles}
              shimmerTranslate={shimmerTranslate}
              skeletonHighlight={theme.skeletonHighlight}
            />
          ) : null}

          {!loading && weather ? (
            <Animated.View
              style={[
                {
                  opacity: entry.interpolate({ inputRange: [0.25, 0.8, 1], outputRange: [0, 1, 1] }),
                  transform: [
                    {
                      translateY: entry.interpolate({ inputRange: [0, 1], outputRange: [26, 0] }),
                    },
                  ],
                },
              ]}
            >
              <WeatherCard styles={styles} weather={weather} iconPulse={iconPulse} />
            </Animated.View>
          ) : null}

          {!loading && forecast.length > 0 ? (
            <Animated.View
              style={[
                {
                  opacity: entry.interpolate({ inputRange: [0.35, 1], outputRange: [0, 1] }),
                },
              ]}
            >
              <ForecastSection styles={styles} forecast={forecast} />
            </Animated.View>
          ) : null}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
