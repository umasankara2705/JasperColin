import { StyleSheet } from "react-native";

import { ThemePalette } from "@/src/components/weather/theme";

export function createWeatherStyles(theme: ThemePalette) {
  return StyleSheet.create({
    gradient: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
    container: {
      paddingHorizontal: 18,
      paddingBottom: 34,
      paddingTop: 8,
      gap: 14,
    },
    orb: {
      position: "absolute",
      borderRadius: 999,
    },
    orbTop: {
      width: 230,
      height: 230,
      top: -70,
      right: -50,
      backgroundColor: theme.orbTop,
    },
    orbBottom: {
      width: 210,
      height: 210,
      bottom: 40,
      left: -65,
      backgroundColor: theme.orbBottom,
    },
    hero: {
      marginTop: 6,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 12,
    },
    title: {
      color: theme.text,
      fontSize: 34,
      fontWeight: "800",
      letterSpacing: 0.6,
    },
    subtitle: {
      marginTop: 2,
      color: theme.subtitle,
      fontSize: 14,
    },
    themeToggle: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      borderRadius: 999,
      borderWidth: 1,
      borderColor: theme.secondaryBorder,
      backgroundColor: theme.secondaryBg,
      paddingHorizontal: 10,
      paddingVertical: 7,
      marginTop: 4,
    },
    themeToggleText: {
      color: theme.secondaryText,
      fontSize: 11,
      fontWeight: "700",
    },
    languageBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 6,
    },
    languageLabel: {
      color: theme.subtitle,
      fontSize: 13,
      fontWeight: "600",
    },
    languageOptions: {
      flexDirection: "row",
      gap: 8,
    },
    languageChip: {
      borderWidth: 1,
      borderColor: theme.chipBorder,
      borderRadius: 999,
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: theme.chipBg,
    },
    languageChipActive: {
      borderColor: theme.chipActiveBorder,
      backgroundColor: theme.chipActiveBg,
    },
    languageChipText: {
      color: theme.chipText,
      fontSize: 11,
      fontWeight: "700",
    },
    languageChipTextActive: {
      color: theme.chipActiveText,
    },
    searchPanel: {
      borderRadius: 20,
      backgroundColor: theme.panel,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 14,
      gap: 12,
    },
    searchRow: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.inputBg,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: theme.border,
      paddingHorizontal: 10,
      gap: 8,
    },
    input: {
      flex: 1,
      color: theme.inputText,
      fontSize: 15,
      paddingVertical: 11,
    },
    pillButton: {
      backgroundColor: theme.buttonBg,
      borderRadius: 10,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    pillButtonText: {
      color: theme.buttonText,
      fontWeight: "700",
      fontSize: 12,
    },
    actionRow: {
      flexDirection: "row",
      gap: 10,
    },
    secondaryButton: {
      flex: 1,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.secondaryBorder,
      backgroundColor: theme.secondaryBg,
      paddingVertical: 10,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: 8,
    },
    secondaryButtonText: {
      color: theme.secondaryText,
      fontWeight: "600",
      fontSize: 12,
    },
    disabledButton: {
      opacity: 0.6,
    },
    errorBox: {
      borderRadius: 14,
      backgroundColor: theme.errorBg,
      borderWidth: 1,
      borderColor: theme.errorBorder,
      paddingVertical: 11,
      paddingHorizontal: 12,
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
    },
    errorText: {
      color: theme.errorText,
      fontSize: 13,
      flex: 1,
    },
    skeletonWrap: {
      gap: 12,
    },
    mainCard: {
      borderRadius: 24,
      padding: 18,
      backgroundColor: theme.cardBg,
      borderWidth: 1,
      borderColor: theme.cardBorder,
    },
    cardHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    cityText: {
      color: theme.text,
      fontSize: 22,
      fontWeight: "700",
      maxWidth: "80%",
    },
    condition: {
      marginTop: 2,
      color: theme.condition,
      fontSize: 15,
      fontWeight: "600",
    },
    temperature: {
      marginTop: 4,
      color: theme.text,
      fontSize: 58,
      fontWeight: "800",
      lineHeight: 62,
    },
    description: {
      color: theme.description,
      fontSize: 14,
      textTransform: "capitalize",
    },
    metricsRow: {
      marginTop: 14,
      flexDirection: "row",
      gap: 10,
    },
    metricBox: {
      flex: 1,
      borderRadius: 14,
      backgroundColor: theme.metricBg,
      borderWidth: 1,
      borderColor: theme.metricBorder,
      paddingVertical: 10,
      alignItems: "center",
      gap: 3,
    },
    metricLabel: {
      color: theme.metricLabel,
      fontSize: 12,
    },
    metricValue: {
      color: theme.metricValue,
      fontSize: 16,
      fontWeight: "700",
    },
    forecastWrap: {
      borderRadius: 20,
      paddingVertical: 14,
      paddingHorizontal: 14,
      backgroundColor: theme.panel,
      borderWidth: 1,
      borderColor: theme.border,
      marginTop: 2,
    },
    forecastTitle: {
      color: theme.text,
      fontSize: 18,
      fontWeight: "700",
    },
    forecastRow: {
      gap: 10,
      paddingTop: 12,
      paddingBottom: 2,
    },
    forecastCard: {
      width: 122,
      borderRadius: 14,
      backgroundColor: theme.metricBg,
      borderWidth: 1,
      borderColor: theme.metricBorder,
      padding: 10,
      alignItems: "center",
      gap: 6,
    },
    forecastDate: {
      color: theme.metricLabel,
      fontSize: 12,
      fontWeight: "600",
    },
    forecastCondition: {
      color: theme.description,
      fontSize: 12,
      textAlign: "center",
    },
    forecastTemp: {
      color: theme.metricValue,
      fontSize: 12,
      fontWeight: "700",
    },
    skeletonRowBetween: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    skeletonColumn: {
      gap: 10,
      flex: 1,
    },
    skeletonBlock: {
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: theme.skeletonBase,
    },
    skeletonShimmer: {
      position: "absolute",
      top: 0,
      bottom: 0,
      width: 120,
      opacity: 0.85,
    },
    skeletonTitle: {
      height: 22,
      width: "64%",
    },
    skeletonSubTitle: {
      height: 16,
      width: "45%",
    },
    skeletonIcon: {
      width: 62,
      height: 62,
      borderRadius: 31,
      marginLeft: 8,
    },
    skeletonTemp: {
      marginTop: 18,
      height: 50,
      width: "50%",
    },
    skeletonDesc: {
      marginTop: 8,
      height: 16,
      width: "62%",
    },
    skeletonMetric: {
      gap: 8,
    },
    skeletonMetricLine: {
      height: 13,
      width: "55%",
    },
    skeletonMetricValue: {
      height: 15,
      width: "45%",
    },
    skeletonForecastTitle: {
      height: 18,
      width: 130,
    },
    skeletonForecastDate: {
      height: 12,
      width: "72%",
    },
    skeletonForecastIcon: {
      width: 30,
      height: 30,
      borderRadius: 15,
    },
    skeletonForecastCond: {
      height: 12,
      width: "64%",
    },
  });
}

export type WeatherScreenStyles = ReturnType<typeof createWeatherStyles>;
