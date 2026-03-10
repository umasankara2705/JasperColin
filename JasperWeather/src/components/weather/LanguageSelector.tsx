import { Pressable, Text, View } from "react-native";

import { AppLanguage, i18n } from "@/src/i18n";
import { WeatherScreenStyles } from "@/src/components/weather/styles";

const LANGUAGE_OPTIONS: { code: AppLanguage; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "hi", label: "HI" },
];

type Props = {
  styles: WeatherScreenStyles;
  selectedLanguage: AppLanguage;
  onPressLanguage: (language: AppLanguage) => void;
};

export function LanguageSelector({ styles, selectedLanguage, onPressLanguage }: Props) {
  return (
    <View style={styles.languageBar}>
      <Text style={styles.languageLabel}>{i18n.t("language")}</Text>
      <View style={styles.languageOptions}>
        {LANGUAGE_OPTIONS.map((option) => {
          const active = selectedLanguage === option.code;
          return (
            <Pressable
              key={option.code}
              onPress={() => onPressLanguage(option.code)}
              style={[styles.languageChip, active && styles.languageChipActive]}
            >
              <Text style={[styles.languageChipText, active && styles.languageChipTextActive]}>
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
