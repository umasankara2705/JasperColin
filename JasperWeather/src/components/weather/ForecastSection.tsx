import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

import { i18n } from "@/src/i18n";
import { WeatherScreenStyles } from "@/src/components/weather/styles";
import { weatherIcon } from "@/src/components/weather/weatherIcon";
import { ForecastDay } from "@/src/types/weather";

type Props = {
  styles: WeatherScreenStyles;
  forecast: ForecastDay[];
};

export function ForecastSection({ styles, forecast }: Props) {
  return (
    <View style={styles.forecastWrap}>
      <Text style={styles.forecastTitle}>{i18n.t("forecast5Day")}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.forecastRow}>
        {forecast.map((day, index) => {
          const dayIcon = weatherIcon(day.icon);
          return (
            <View
              key={`${day.dateLabel}-${day.condition}-${day.tempMin}-${day.tempMax}-${index}`}
              style={styles.forecastCard}
            >
              <Text style={styles.forecastDate}>{day.dateLabel}</Text>
              <MaterialCommunityIcons name={dayIcon.name} size={28} color={dayIcon.color} />
              <Text style={styles.forecastCondition}>{day.condition}</Text>
              <Text style={styles.forecastTemp}>
                {day.tempMin}° / {day.tempMax}°
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
