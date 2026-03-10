import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Animated, Pressable, Text, View } from "react-native";

import { i18n } from "@/src/i18n";
import { ThemeName } from "@/src/components/weather/theme";
import { WeatherScreenStyles } from "@/src/components/weather/styles";

type Props = {
  styles: WeatherScreenStyles;
  themeMode: ThemeName;
  secondaryTextColor: string;
  themeRotate: Animated.AnimatedInterpolation<string | number>;
  onToggleTheme: () => void;
};

export function HeroHeader({
  styles,
  themeMode,
  secondaryTextColor,
  themeRotate,
  onToggleTheme,
}: Props) {
  return (
    <View style={styles.hero}>
      <View>
        <Text style={styles.title}>{i18n.t("appTitle")}</Text>
        <Text style={styles.subtitle}>{i18n.t("subtitle")}</Text>
      </View>

      <Pressable style={styles.themeToggle} onPress={onToggleTheme}>
        <Animated.View style={{ transform: [{ rotate: themeRotate }] }}>
          <MaterialCommunityIcons
            name={themeMode === "dark" ? "weather-night" : "white-balance-sunny"}
            size={20}
            color={secondaryTextColor}
          />
        </Animated.View>
        <Text style={styles.themeToggleText}>
          {i18n.t("theme")}: {themeMode === "dark" ? i18n.t("dark") : i18n.t("light")}
        </Text>
      </Pressable>
    </View>
  );
}
