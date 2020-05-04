import * as React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { HeaderProps } from "./NeuHeader.props"
import { Text, NeuCircleButton } from "@components/core"
import { Icon } from "@components/contents"
import { spacing, color, typography } from "@theme"
import { translate } from "../../../i18n"

// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing[2],
  alignItems: "center",
  paddingTop: spacing[3],
  paddingBottom: spacing[5],
  justifyContent: "center",
}
const BASE_TITLE: TextStyle = {
  fontSize: 12,
  lineHeight: 16,
  textAlign: "center",
  letterSpacing: 1.5,
  fontFamily: typography.primary
}
const TITLE: TextStyle = { ...BASE_TITLE, paddingTop: spacing[3], color: color.palette.textSecondary }
const SEC_TITLE: TextStyle = { ...BASE_TITLE, fontWeight: "bold", color: color.palette.textPrimary }
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: 32 }
const RIGHT: ViewStyle = { width: 32 }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export const NeuHeader: React.FunctionComponent<HeaderProps> = props => {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    headerText,
    headerTx,
    secHeaderText,
    secHeaderTx,
    style,
    titleStyle,
  } = props
  const header = headerText || (headerTx && translate(headerTx)) || ""
  const secHeader = secHeaderText || (secHeaderTx && translate(secHeaderTx)) || ""

  return (
    <View style={{ ...ROOT, ...style }}>
      {leftIcon ? (
        <NeuCircleButton preset="sm" onPress={onLeftPress}>
          <Icon icon={leftIcon} />
        </NeuCircleButton>
      ) : (
        <View style={LEFT} />
      )}
      <View style={TITLE_MIDDLE}>
        <Text style={{ ...TITLE, ...titleStyle }} text={header} />
        <Text style={{ ...SEC_TITLE, ...titleStyle }} text={secHeader} />
      </View>
      {rightIcon ? (
        <NeuCircleButton preset="sm" onPress={onRightPress}>
          <Icon icon={rightIcon} />
        </NeuCircleButton>
      ) : (
        <View style={RIGHT} />
      )}
    </View>
  )
}
