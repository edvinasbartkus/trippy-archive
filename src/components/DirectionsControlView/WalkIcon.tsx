import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

export function WalkIcon({
  width = 9,
  height = 12,
  color = "#000",
}: {
  width?: number;
  height?: number;
  color?: string;
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 9 12">
      <G fill={color} fillRule="nonzero">
        <Path d="M7.588 6.061L6.13 5.219a.625.625 0 01-.237-.3L5.44 3.38a.355.355 0 00-.05-.103.385.385 0 00-.338-.203l-1.929.084a.382.382 0 00-.227.088c-.013.008-.027.016-.038.025l-1.31 1.01a.57.57 0 00-.193.54l.519 2.233a.434.434 0 00.453.325l.194-.02a.361.361 0 00.257-.144.362.362 0 00.059-.289l-.369-1.723a.32.32 0 01.103-.28l.233-.18.12 2.766.002.01-.533 1.18a1.352 1.352 0 01-.368.45l-1.249.9a.55.55 0 00-.173.66l.171.368a.395.395 0 00.357.239c.087 0 .172-.03.247-.085l1.649-1.228c.164-.122.367-.36.461-.542l.823-1.585c.007-.013.01-.027.016-.04l.058-.003 1.347 3.715a.671.671 0 00.828.408l.083-.027a.62.62 0 00.399-.808L5.624 7.211l-.023-.052-.046-1.05 1.564.813a.393.393 0 00.525-.16l.093-.172a.396.396 0 00-.149-.529zM3.876 2.797a1.396 1.396 0 001.397-1.46A1.394 1.394 0 003.816.002a1.39 1.39 0 00-.97.452A1.39 1.39 0 002.48 1.46c.032.75.645 1.338 1.396 1.338z" />
      </G>
    </Svg>
  );
}
