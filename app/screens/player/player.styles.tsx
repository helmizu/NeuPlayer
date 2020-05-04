import { StyleSheet, ViewStyle, ImageStyle, TextStyle, Platform } from "react-native"
import { color, typography, spacing } from "theme"

export const styles = StyleSheet.create({
  ACTION_CONTROL: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  } as ViewStyle,
  ACTION_CONTROL_SEEK_BAR: {
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    paddingBottom: spacing[3]
  } as ViewStyle,
  BODY: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: spacing[6],
  } as ViewStyle,
  CONTAINER: {
    paddingHorizontal: spacing[4],
  } as ViewStyle,
  CONTAINER_COVER: {
    borderRadius: 20,
    width: 320,
    height: 320,
    shadowRadius: 7,
    backgroundColor: color.palette.primary,
    overflow: "hidden",
    padding: spacing[3],
    marginBottom: spacing[3],
  } as ViewStyle,
  CONTAINER_SEEK_BAR: {
    flex: 1,
    width: 320 - 36,
    borderRadius: 14,
    height: 28,
    shadowRadius: 3,
    backgroundColor: color.palette.primary,
    overflow: "hidden",
    paddingHorizontal: spacing[2]
  } as ViewStyle,
  CONTENT: {
    flex: 1,
    alignItems: "center"
  } as ViewStyle,
  CONTROLLER: {
    width: 320,
    paddingVertical: spacing[2],
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  } as ViewStyle,
  CUSTOM_SLIDER_CONTAINER: {
    height: 28,
    width: 320 - 52
  } as ViewStyle,
  CUSTOM_SLIDER_THUMB: {
    backgroundColor: color.palette.secondary,
    borderColor: color.palette.primaryDarker,
    borderRadius: 14,
    borderWidth: 8,
    height: 28,
    shadowColor: color.palette.primaryDarker,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 1.5,
    width: 28,
  } as ViewStyle,
  CUSTOM_SLIDER_TRACK: {
    backgroundColor: color.palette.primaryDarker,
    borderRadius: 6,
    height: 10,
    shadowColor: color.palette.primaryDarker,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  } as ViewStyle,
  FOOTER: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing[5],
    marginBottom: spacing[5]
  } as ViewStyle,
  FULL: { flex: 1 } as ViewStyle,
  ICON_ACTION: {
    marginHorizontal: spacing[2] - 4,
    padding: spacing[1],
    justifyContent: "center",
    alignItems: "center"
  } as ImageStyle,
  ICON_ACTION_FAVORITE: {
    width: 18,
    height: 18
  } as ImageStyle,
  ICON_ACTION_PLAYLIST: {
    width: 22,
    height: 22
  } as ImageStyle,
  IMAGE_COVER: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
    borderRadius: Platform.select({ ios: 12, android: 20 }),
  } as ImageStyle,
  INFORMATION: {
    width: 320,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[6],
  } as ViewStyle,
  SEEK_BAR_CONTAINER: {
    width: 320 - 36,
    marginRight: spacing[2]
  } as ViewStyle,
  SEEK_BAR_TIME_CONTROL: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: spacing[1],
    paddingHorizontal: spacing[1]
  } as ViewStyle,
  TEXT_NAME: {
    fontSize: 16,
    lineHeight: 24,
    textAlignVertical: "center",
    color: color.palette.textPrimary,
    fontFamily: typography.primary,
    flex: 1,
  } as TextStyle,
  TEXT_TIME: {
    fontSize: 12,
    lineHeight: 20,
    textAlignVertical: "center",
    color: color.palette.textPrimary,
    fontFamily: typography.primary,
  } as TextStyle,
  TEXT_TITLE: {
    fontSize: 20,
    lineHeight: 30,
    textAlignVertical: "center",
    color: color.palette.textSecondary,
    fontFamily: typography.primary,
    fontWeight: Platform.select({ ios: "500", android: "bold" }),
  } as TextStyle,
})
