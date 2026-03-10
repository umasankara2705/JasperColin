import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Animated, Pressable, Text, TextInput, View } from "react-native";

import { i18n } from "@/src/i18n";
import { WeatherScreenStyles } from "@/src/components/weather/styles";

type Props = {
  styles: WeatherScreenStyles;
  loading: boolean;
  query: string;
  placeholderColor: string;
  secondaryTextColor: string;
  rotate: Animated.AnimatedInterpolation<string | number>;
  onChangeQuery: (text: string) => void;
  onSearch: () => void;
  onUseLocation: () => void;
  onRefresh: () => void;
};

export function SearchPanel({
  styles,
  loading,
  query,
  placeholderColor,
  secondaryTextColor,
  rotate,
  onChangeQuery,
  onSearch,
  onUseLocation,
  onRefresh,
}: Props) {
  return (
    <View style={styles.searchPanel}>
      <View style={styles.searchRow}>
        <MaterialCommunityIcons name="map-search" size={20} color={secondaryTextColor} />
        <TextInput
          value={query}
          onChangeText={onChangeQuery}
          placeholder={i18n.t("searchPlaceholder")}
          placeholderTextColor={placeholderColor}
          style={styles.input}
          returnKeyType="search"
          editable={!loading}
          onSubmitEditing={onSearch}
        />
        <Pressable
          style={[styles.pillButton, loading && styles.disabledButton]}
          disabled={loading}
          onPress={onSearch}
        >
          <Text style={styles.pillButtonText}>{i18n.t("search")}</Text>
        </Pressable>
      </View>

      <View style={styles.actionRow}>
        <Pressable
          style={[styles.secondaryButton, loading && styles.disabledButton]}
          disabled={loading}
          onPress={onUseLocation}
        >
          <MaterialCommunityIcons name="crosshairs-gps" size={16} color={secondaryTextColor} />
          <Text style={styles.secondaryButtonText}>{i18n.t("useMyLocation")}</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton} onPress={onRefresh}>
          <Animated.View style={{ transform: [{ rotate }] }}>
            <MaterialCommunityIcons name="refresh" size={16} color={secondaryTextColor} />
          </Animated.View>
          <Text style={styles.secondaryButtonText}>{i18n.t("refresh")}</Text>
        </Pressable>
      </View>
    </View>
  );
}
