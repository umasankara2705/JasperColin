import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Animated, Text, View } from "react-native";

import { i18n } from "@/src/i18n";
import { weatherIcon } from "@/src/components/weather/weatherIcon";
import { WeatherScreenStyles } from "@/src/components/weather/styles";
import { WeatherData } from "@/src/types/weather";

type Props = {
  styles: WeatherScreenStyles;
  weather: WeatherData;
  iconPulse: Animated.Value;
};

export function WeatherCard({ styles, weather, iconPulse }: Props) {
  const weatherMeta = weatherIcon(weather.icon);

  return (
    <View style={styles.mainCard}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.cityText}>
            {weather.city}, {weather.country}
          </Text>
          <Text style={styles.condition}>{weather.condition}</Text>
        </View>

        <Animated.View style={{ transform: [{ scale: iconPulse }] }}>
          <MaterialCommunityIcons name={weatherMeta.name} size={64} color={weatherMeta.color} />
        </Animated.View>
      </View>

      <Text style={styles.temperature}>
        {weather.temperature}°{i18n.t("celsius")}
      </Text>
      <Text style={styles.description}>{weather.description}</Text>

      <View style={styles.metricsRow}>
        <View style={styles.metricBox}>
          <MaterialCommunityIcons name="water-percent" size={18} color={weatherMeta.color} />
          <Text style={styles.metricLabel}>{i18n.t("humidity")}</Text>
          <Text style={styles.metricValue}>{weather.humidity}%</Text>
        </View>

        <View style={styles.metricBox}>
          <MaterialCommunityIcons name="weather-windy" size={18} color={weatherMeta.color} />
          <Text style={styles.metricLabel}>{i18n.t("windSpeed")}</Text>
          <Text style={styles.metricValue}>
            {weather.windSpeed} {i18n.t("kmh")}
          </Text>
        </View>
      </View>
    </View>
  );
}
