export const icons = {
  back: require("./icons/arrow-back.png"),
  moreVertical: require("./icons/more-vertical.png"),
  favoriteOutline: require("./icons/favorite-outline.png"),
  playlistAdd: require("./icons/playlist-add.png"),
  repeat: require("./icons/repeat.png"),
  shuffle: require("./icons/shuffle.png"),
  skipNext: require("./icons/skip-next.png"),
  play: require("./icons/play.png"),
  skipPrevious: require("./icons/skip-previous.png"),
  speaker: require("./icons/speaker.png"),
}

export const images = {
  coverRichBrian: require("./images/cover-richBrian.png"),
  coverAllieSherlock: require("./images/cover-allieSherlock.png"),
}

export type ImageTypes = keyof typeof images

export type IconTypes = keyof typeof icons
