import { ViewStyle, TextStyle } from "react-native"
import { color, spacing } from "@theme"

/**
 * All text will start off looking like this.
 */

const SIZE_XS = 28
const SIZE_SM = 36
const SIZE_MD = 48
const SIZE_LG = 60
const SIZE_XL = 72

const size = (size: any): ViewStyle => ({
  width: size,
  height: size,
  borderRadius: size / 2,
})

const BASE_VIEW: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  overflow: 'hidden',
}

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing[3],
}

const BASE_BUTTON: ViewStyle = {
  shadowRadius: 5,
  backgroundColor: color.palette.primary,
  justifyContent: "center",
  alignItems: "center",
  overflow: 'hidden',
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets = {
  xs: { ...BASE_VIEW, backgroundColor: color.transparent, ...size(SIZE_XS) } as ViewStyle,
  sm: { ...BASE_VIEW, backgroundColor: color.transparent, ...size(SIZE_SM) } as ViewStyle,
  md: { ...BASE_VIEW, backgroundColor: color.transparent, ...size(SIZE_MD) } as ViewStyle,
  lg: { ...BASE_VIEW, backgroundColor: color.transparent, ...size(SIZE_LG) } as ViewStyle,
  xl: { ...BASE_VIEW, backgroundColor: color.transparent, ...size(SIZE_XL) } as ViewStyle,
}

export const buttonPresset = {
  xs: { ...BASE_BUTTON, backgroundColor: color.primary, ...size(SIZE_XS) } as ViewStyle,
  sm: { ...BASE_BUTTON, backgroundColor: color.primary, ...size(SIZE_SM) } as ViewStyle,
  md: { ...BASE_BUTTON, backgroundColor: color.primary, ...size(SIZE_MD) } as ViewStyle,
  lg: { ...BASE_BUTTON, backgroundColor: color.primary, ...size(SIZE_LG) } as ViewStyle,
  xl: { ...BASE_BUTTON, backgroundColor: color.primary, ...size(SIZE_XL) } as ViewStyle,

}

export const textPresets = {
  xs: { ...BASE_TEXT, fontSize: 9, color: color.palette.white } as TextStyle,
  sm: { ...BASE_TEXT, fontSize: 9, color: color.palette.white } as TextStyle,
  md: { ...BASE_TEXT, fontSize: 9, color: color.palette.white } as TextStyle,
  lg: { ...BASE_TEXT, fontSize: 9, color: color.palette.white } as TextStyle,
  xl: { ...BASE_TEXT, fontSize: 9, color: color.palette.white } as TextStyle,
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets
