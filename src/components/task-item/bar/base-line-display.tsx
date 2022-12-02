import React from "react";
import style from "./bar.module.css";

type BarDisplayProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  /* progress start point */
  barCornerRadius: number;
  styles: {
    baseLineColor: string;
  };
};
export const BaseLineDisplay: React.FC<BarDisplayProps> = ({
  x,
  y,
  width,
  height,
  barCornerRadius,
  styles,
}) => {

  return (
    <g>
      <rect
        x={x}
        width={width}
        y={y}
        height={height}
        ry={barCornerRadius}
        rx={barCornerRadius}
        fill={styles.baseLineColor}
        className={style.barBackground}
      />
    </g>
  );
};