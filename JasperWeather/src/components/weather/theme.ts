export type ThemeName = "light" | "dark";

export type ThemePalette = {
  gradient: [string, string, string];
  text: string;
  subtitle: string;
  panel: string;
  border: string;
  inputBg: string;
  inputText: string;
  placeholder: string;
  orbTop: string;
  orbBottom: string;
  chipBg: string;
  chipBorder: string;
  chipActiveBg: string;
  chipActiveBorder: string;
  chipText: string;
  chipActiveText: string;
  buttonBg: string;
  buttonText: string;
  secondaryBg: string;
  secondaryBorder: string;
  secondaryText: string;
  cardBg: string;
  cardBorder: string;
  metricBg: string;
  metricBorder: string;
  metricLabel: string;
  metricValue: string;
  condition: string;
  description: string;
  errorBg: string;
  errorBorder: string;
  errorText: string;
  skeletonBase: string;
  skeletonHighlight: string;
};

export const THEMES: Record<ThemeName, ThemePalette> = {
  light: {
    gradient: ["#E6F6FF", "#F0FDFA", "#ECFEFF"],
    text: "#0F172A",
    subtitle: "#334155",
    panel: "rgba(255, 255, 255, 0.86)",
    border: "rgba(14, 116, 144, 0.18)",
    inputBg: "rgba(255, 255, 255, 0.92)",
    inputText: "#0F172A",
    placeholder: "#64748B",
    orbTop: "rgba(14, 165, 233, 0.2)",
    orbBottom: "rgba(16, 185, 129, 0.2)",
    chipBg: "rgba(241, 245, 249, 0.9)",
    chipBorder: "rgba(100, 116, 139, 0.28)",
    chipActiveBg: "rgba(14, 165, 233, 0.2)",
    chipActiveBorder: "rgba(2, 132, 199, 0.5)",
    chipText: "#334155",
    chipActiveText: "#075985",
    buttonBg: "#0284C7",
    buttonText: "#F0F9FF",
    secondaryBg: "rgba(240, 249, 255, 0.95)",
    secondaryBorder: "rgba(14, 116, 144, 0.24)",
    secondaryText: "#075985",
    cardBg: "rgba(255, 255, 255, 0.94)",
    cardBorder: "rgba(14, 116, 144, 0.2)",
    metricBg: "rgba(240, 249, 255, 0.95)",
    metricBorder: "rgba(14, 116, 144, 0.2)",
    metricLabel: "#0C4A6E",
    metricValue: "#0F172A",
    condition: "#0C4A6E",
    description: "#334155",
    errorBg: "rgba(254, 226, 226, 0.95)",
    errorBorder: "rgba(239, 68, 68, 0.32)",
    errorText: "#7F1D1D",
    skeletonBase: "rgba(148, 163, 184, 0.25)",
    skeletonHighlight: "rgba(255, 255, 255, 0.7)",
  },
  dark: {
    gradient: ["#082F49", "#0F766E", "#164E63"],
    text: "#ECFEFF",
    subtitle: "#BAE6FD",
    panel: "rgba(8, 47, 73, 0.46)",
    border: "rgba(186, 230, 253, 0.25)",
    inputBg: "rgba(2, 6, 23, 0.34)",
    inputText: "#F8FAFC",
    placeholder: "#94A3B8",
    orbTop: "rgba(125, 211, 252, 0.14)",
    orbBottom: "rgba(16, 185, 129, 0.14)",
    chipBg: "rgba(15, 23, 42, 0.34)",
    chipBorder: "rgba(147, 197, 253, 0.35)",
    chipActiveBg: "rgba(6, 182, 212, 0.3)",
    chipActiveBorder: "#67E8F9",
    chipText: "#BFDBFE",
    chipActiveText: "#ECFEFF",
    buttonBg: "#0EA5E9",
    buttonText: "#F0F9FF",
    secondaryBg: "rgba(15, 23, 42, 0.28)",
    secondaryBorder: "rgba(147, 197, 253, 0.3)",
    secondaryText: "#DBEAFE",
    cardBg: "rgba(2, 6, 23, 0.48)",
    cardBorder: "rgba(103, 232, 249, 0.25)",
    metricBg: "rgba(8, 47, 73, 0.64)",
    metricBorder: "rgba(125, 211, 252, 0.2)",
    metricLabel: "#BAE6FD",
    metricValue: "#ECFEFF",
    condition: "#A5F3FC",
    description: "#CFFAFE",
    errorBg: "rgba(127, 29, 29, 0.46)",
    errorBorder: "rgba(252, 165, 165, 0.5)",
    errorText: "#FEE2E2",
    skeletonBase: "rgba(148, 163, 184, 0.24)",
    skeletonHighlight: "rgba(255, 255, 255, 0.28)",
  },
};
