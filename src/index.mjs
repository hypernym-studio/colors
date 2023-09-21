const _ = `\x1B[`
const reset = (v) => `${_}0m${v}${_}0m`
const bold = (v) => `${_}1m${v}${_}22m`
const dim = (v) => `${_}2m${v}${_}22m`
const italic = (v) => `${_}3m${v}${_}23m`
const underline = (v) => `${_}4m${v}${_}24m`
const inverse = (v) => `${_}7m${v}${_}27m`
const hidden = (v) => `${_}8m${v}${_}28m`
const crossout = (v) => `${_}9m${v}${_}29m`
const black = (v) => `${_}30m${v}${_}39m`
const bgBlack = (v) => `${_}40m${v}${_}49m`
const red = (v) => `${_}31m${v}${_}39m`
const bgRed = (v) => `${_}41m${v}${_}49m`
const green = (v) => `${_}32m${v}${_}39m`
const bgGreen = (v) => `${_}42m${v}${_}49m`
const yellow = (v) => `${_}33m${v}${_}39m`
const bgYellow = (v) => `${_}43m${v}${_}49m`
const blue = (v) => `${_}34m${v}${_}39m`
const bgBlue = (v) => `${_}44m${v}${_}49m`
const magenta = (v) => `${_}35m${v}${_}39m`
const bgMagenta = (v) => `${_}45m${v}${_}49m`
const cyan = (v) => `${_}36m${v}${_}39m`
const bgCyan = (v) => `${_}46m${v}${_}49m`
const white = (v) => `${_}37m${v}${_}39m`
const bgWhite = (v) => `${_}47m${v}${_}49m`
const gray = (v) => `${_}90m${v}${_}39m`
const bgGray = (v) => `${_}100m${v}${_}49m`

export {
  reset,
  bold,
  dim,
  italic,
  underline,
  inverse,
  hidden,
  crossout,
  black,
  bgBlack,
  red,
  bgRed,
  green,
  bgGreen,
  yellow,
  bgYellow,
  blue,
  bgBlue,
  magenta,
  bgMagenta,
  cyan,
  bgCyan,
  white,
  bgWhite,
  gray,
  bgGray,
}
