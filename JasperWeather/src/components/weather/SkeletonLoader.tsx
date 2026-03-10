import { Animated, View } from "react-native";

import { WeatherScreenStyles } from "@/src/components/weather/styles";

type Props = {
  styles: WeatherScreenStyles;
  shimmerTranslate: Animated.AnimatedInterpolation<string | number>;
  skeletonHighlight: string;
};

function Shimmer({
  styles,
  shimmerTranslate,
  skeletonHighlight,
}: {
  styles: WeatherScreenStyles;
  shimmerTranslate: Animated.AnimatedInterpolation<string | number>;
  skeletonHighlight: string;
}) {
  return (
    <Animated.View
      style={[
        styles.skeletonShimmer,
        { backgroundColor: skeletonHighlight, transform: [{ translateX: shimmerTranslate }] },
      ]}
    />
  );
}

export function SkeletonLoader({ styles, shimmerTranslate, skeletonHighlight }: Props) {
  return (
    <Animated.View style={styles.skeletonWrap}>
      <View style={styles.mainCard}>
        <View style={styles.skeletonRowBetween}>
          <View style={styles.skeletonColumn}>
            <View style={[styles.skeletonBlock, styles.skeletonTitle]}>
              <Shimmer
                styles={styles}
                shimmerTranslate={shimmerTranslate}
                skeletonHighlight={skeletonHighlight}
              />
            </View>
            <View style={[styles.skeletonBlock, styles.skeletonSubTitle]}>
              <Shimmer
                styles={styles}
                shimmerTranslate={shimmerTranslate}
                skeletonHighlight={skeletonHighlight}
              />
            </View>
          </View>
          <View style={[styles.skeletonBlock, styles.skeletonIcon]}>
            <Shimmer
              styles={styles}
              shimmerTranslate={shimmerTranslate}
              skeletonHighlight={skeletonHighlight}
            />
          </View>
        </View>

        <View style={[styles.skeletonBlock, styles.skeletonTemp]}>
          <Shimmer
            styles={styles}
            shimmerTranslate={shimmerTranslate}
            skeletonHighlight={skeletonHighlight}
          />
        </View>
        <View style={[styles.skeletonBlock, styles.skeletonDesc]}>
          <Shimmer
            styles={styles}
            shimmerTranslate={shimmerTranslate}
            skeletonHighlight={skeletonHighlight}
          />
        </View>

        <View style={styles.metricsRow}>
          {[1, 2].map((item) => (
            <View key={item} style={[styles.metricBox, styles.skeletonMetric]}>
              <View style={[styles.skeletonBlock, styles.skeletonMetricLine]}>
                <Shimmer
                  styles={styles}
                  shimmerTranslate={shimmerTranslate}
                  skeletonHighlight={skeletonHighlight}
                />
              </View>
              <View style={[styles.skeletonBlock, styles.skeletonMetricValue]}>
                <Shimmer
                  styles={styles}
                  shimmerTranslate={shimmerTranslate}
                  skeletonHighlight={skeletonHighlight}
                />
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.forecastWrap}>
        <View style={[styles.skeletonBlock, styles.skeletonForecastTitle]}>
          <Shimmer
            styles={styles}
            shimmerTranslate={shimmerTranslate}
            skeletonHighlight={skeletonHighlight}
          />
        </View>
        <View style={styles.forecastRow}>
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.forecastCard}>
              <View style={[styles.skeletonBlock, styles.skeletonForecastDate]}>
                <Shimmer
                  styles={styles}
                  shimmerTranslate={shimmerTranslate}
                  skeletonHighlight={skeletonHighlight}
                />
              </View>
              <View style={[styles.skeletonBlock, styles.skeletonForecastIcon]}>
                <Shimmer
                  styles={styles}
                  shimmerTranslate={shimmerTranslate}
                  skeletonHighlight={skeletonHighlight}
                />
              </View>
              <View style={[styles.skeletonBlock, styles.skeletonForecastCond]}>
                <Shimmer
                  styles={styles}
                  shimmerTranslate={shimmerTranslate}
                  skeletonHighlight={skeletonHighlight}
                />
              </View>
            </View>
          ))}
        </View>
      </View>
    </Animated.View>
  );
}
