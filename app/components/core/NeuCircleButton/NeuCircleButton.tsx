import * as React from "react"
import { TouchableOpacity } from "react-native"
import { Text } from "../text/text"
import { viewPresets, textPresets, buttonPresset } from "./NeuCircleButton.presets"
import { ButtonProps } from "./NeuCircleButton.props"
import { mergeAll, flatten } from "ramda"
import { Neomorph } from 'react-native-neomorph-shadows'
/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function NeuCircleButton(props: ButtonProps) {
  // grab the props
  const {
    preset = "md",
    tx,
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    ...rest
  } = props

  const viewStyle = mergeAll(flatten([viewPresets[preset] || viewPresets.md, styleOverride]))
  const buttonStyle = mergeAll(flatten([buttonPresset[preset] || viewPresets.md, styleOverride]))
  const textStyle = mergeAll(
    flatten([textPresets[preset] || textPresets.md, textStyleOverride]),
  )

  const content = children || <Text tx={tx} text={text} style={textStyle} />

  return (
    <Neomorph style={buttonStyle}>
      <TouchableOpacity style={viewStyle} {...rest}>
        {content}
      </TouchableOpacity>
    </Neomorph>
  )
}
