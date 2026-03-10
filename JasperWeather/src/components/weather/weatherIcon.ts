export function weatherIcon(icon: string) {
  if (icon.includes("01")) return { name: "weather-sunny", color: "#F59E0B" } as const;
  if (icon.includes("02") || icon.includes("03") || icon.includes("04")) {
    return { name: "weather-partly-cloudy", color: "#60A5FA" } as const;
  }
  if (icon.includes("09") || icon.includes("10")) {
    return { name: "weather-rainy", color: "#38BDF8" } as const;
  }
  if (icon.includes("11")) return { name: "weather-lightning", color: "#FBBF24" } as const;
  if (icon.includes("13")) return { name: "weather-snowy", color: "#E2E8F0" } as const;
  if (icon.includes("50")) return { name: "weather-fog", color: "#94A3B8" } as const;

  return { name: "weather-cloudy", color: "#93C5FD" } as const;
}
