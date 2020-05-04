import * as React from "react"
import { Image, View, TouchableOpacity } from "react-native"
import { ParamListBase } from "@react-navigation/native"
import { Slider } from "@miblanchard/react-native-slider";
import { NativeStackNavigationProp } from "react-native-screens/native-stack"
import { NeuHeader, Text, Screen, NeuCircleButton, Icon } from "@components"
import { color } from "@theme"
import { Neomorph } from "react-native-neomorph-shadows"
import { images } from "assets"
import { styles } from "./player.styles"

export interface PlayerScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase>
}

export const PlayerScreen: React.FunctionComponent<PlayerScreenProps> = props => {
  const goBack = React.useMemo(() => () => props.navigation.goBack(), [props.navigation])
  const noop = () => {}
  return (
    <View testID="PlayerScreen" style={styles.FULL}>
      <Screen style={styles.CONTAINER} preset="fixed" backgroundColor={color.palette.primary} statusBarColor={color.palette.primary} statusBar="dark-content">
        <NeuHeader
          headerText="PLAYING FROM ALBUM"
          secHeaderText="ALLIE SHERLOCK"
          leftIcon="back"
          rightIcon="moreVertical"
          onLeftPress={goBack}
        />
        <View style={styles.CONTENT}>
          <View style={styles.BODY}>
            <Neomorph style={styles.CONTAINER_COVER}>
              <Image source={images.coverAllieSherlock} style={styles.IMAGE_COVER} />
            </Neomorph>

            <View style={styles.INFORMATION}>
              <Text style={styles.TEXT_TITLE} numberOfLines={1}>Million Years Ago</Text>
              <View style={styles.ACTION_CONTROL}>
                <Text style={styles.TEXT_NAME} numberOfLines={1}>Allie Sherlock</Text>
                <TouchableOpacity onPress={noop}>
                  <Icon icon="favoriteOutline" style={styles.ICON_ACTION_FAVORITE} containerStyle={styles.ICON_ACTION} />
                </TouchableOpacity>
                <TouchableOpacity onPress={noop}>
                  <Icon icon="playlistAdd" style={styles.ICON_ACTION_PLAYLIST} containerStyle={styles.ICON_ACTION} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.FOOTER}>
            <View style={styles.ACTION_CONTROL_SEEK_BAR}>
              <View style={styles.SEEK_BAR_CONTAINER}>
                <View style={styles.SEEK_BAR_TIME_CONTROL}>
                  <Text style={styles.TEXT_TIME} numberOfLines={1}>00.10</Text>
                  <Text style={styles.TEXT_TIME} numberOfLines={1}>00.30</Text>
                </View>
                <Neomorph style={styles.CONTAINER_SEEK_BAR}>
                  <Slider
                    value={10}
                    minimumTrackTintColor={color.palette.secondary}
                    minimumValue={0}
                    maximumValue={30}
                    thumbStyle={styles.CUSTOM_SLIDER_THUMB}
                    trackStyle={styles.CUSTOM_SLIDER_TRACK}
                    containerStyle={styles.CUSTOM_SLIDER_CONTAINER}
                    thumbTouchSize={{ height: 28, width: 28 }}
                    />
                </Neomorph>
              </View>
              <NeuCircleButton preset="xs">
                <Icon containerStyle={styles.ICON_ACTION} style={{ width: 13, height: 13 }} icon="speaker" />
              </NeuCircleButton>
            </View>
            <View style={styles.CONTROLLER}>
              <NeuCircleButton preset="sm">
                <Icon containerStyle={styles.ICON_ACTION} style={{ width: 20, height: 20 }} icon="repeat" />
              </NeuCircleButton>
              <NeuCircleButton preset="lg">
                <Icon containerStyle={styles.ICON_ACTION} style={{ width: 44, height: 44 }} icon="skipPrevious" />
              </NeuCircleButton>
              <NeuCircleButton preset="xl">
                <Icon containerStyle={styles.ICON_ACTION} style={{ width: 40, height: 40 }} icon="play" />
              </NeuCircleButton>
              <NeuCircleButton preset="lg">
                <Icon containerStyle={styles.ICON_ACTION} style={{ width: 44, height: 44 }} icon="skipNext" />
              </NeuCircleButton>
              <NeuCircleButton preset="sm">
                <Icon containerStyle={styles.ICON_ACTION} style={{ width: 20, height: 20 }} icon="shuffle" />
              </NeuCircleButton>
            </View>
          </View>
        </View>
      </Screen>
    </View>
  )
}
