import { AngleUnit } from "./enum";

export interface RGB<T extends number | string> {
  r: T;
  g: T;
  b: T;
  alpha?: T;
}
export type RawRGB = RGB<number> | RGB<string>;

/**
 * Hue: 0-360
 * Saturation: 0-100
 * Lightness: 0-100
 */
export interface HSL<T extends number | string> {
  h: T;
  s: T;
  l: T;
  alpha?: T;
}

export type RawHSL = HSL<number> | HSL<string>;

export interface HWB<T extends number | string> {
  h: T;
  w: T;
  b: T;
  alpha?: T;
}

export type RawHWB = HWB<number> | HWB<string>;

export interface LAB<T extends number | string> {
  l: T;
  a: T;
  b: T;
  alpha?: T;
}

export type RawLAB = LAB<number> | LAB<string>;

export interface LCH<T extends number | string> {
  l: T;
  c: T;
  h: T;
  alpha?: T;
}

export type RawLCH = LCH<number> | LCH<string>;

export interface OKLAB<T extends number | string> {
  l: T;
  a: T;
  b: T;
  ok: true;
  alpha?: T;
}

export type RawOKLAB = OKLAB<number> | OKLAB<string>;

export interface OKLCH<T extends number | string> {
  l: T;
  c: T;
  h: T;
  ok: true;
  alpha?: T;
}

export type RawOKLCH = OKLCH<number> | OKLCH<string>;

export type Color =
  | RGB<number>
  | RGB<string>
  | HSL<number>
  | HSL<string>
  | HWB<number>
  | HWB<string>
  | LAB<number>
  | LAB<string>
  | LCH<number>
  | LCH<string>
  | OKLAB<number>
  | OKLAB<string>
  | OKLCH<number>
  | OKLCH<string>;

export type AngleUnitType = `${AngleUnit}`;

export interface Options {
  legacy: boolean;
  spaced: boolean;
  angleUnit: AngleUnitType;
}

export type ColorFormat =
  | "hsl"
  | "hsla"
  | "hwb"
  | "lab"
  | "lch"
  | "oklab"
  | "oklch"
  | "rgb"
  | "rgba";

export type ToStringColor = (options: Partial<Options>) => string;

export interface GetColor {
  toString: ToStringColor;
  options: Options;
}
