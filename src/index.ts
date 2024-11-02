import type { Color } from '@/types'

const _ = `\x1B[`
export const reset: Color = (v) => `${_}0m${v}${_}0m`
export const bold: Color = (v) => `${_}1m${v}${_}22m`
export const dim: Color = (v) => `${_}2m${v}${_}22m`
export const italic: Color = (v) => `${_}3m${v}${_}23m`
export const underline: Color = (v) => `${_}4m${v}${_}24m`
export const inverse: Color = (v) => `${_}7m${v}${_}27m`
export const hidden: Color = (v) => `${_}8m${v}${_}28m`
export const crossout: Color = (v) => `${_}9m${v}${_}29m`
export const black: Color = (v) => `${_}30m${v}${_}39m`
export const bgBlack: Color = (v) => `${_}40m${v}${_}49m`
export const red: Color = (v) => `${_}31m${v}${_}39m`
export const bgRed: Color = (v) => `${_}41m${v}${_}49m`
export const green: Color = (v) => `${_}32m${v}${_}39m`
export const bgGreen: Color = (v) => `${_}42m${v}${_}49m`
export const yellow: Color = (v) => `${_}33m${v}${_}39m`
export const bgYellow: Color = (v) => `${_}43m${v}${_}49m`
export const blue: Color = (v) => `${_}34m${v}${_}39m`
export const bgBlue: Color = (v) => `${_}44m${v}${_}49m`
export const magenta: Color = (v) => `${_}35m${v}${_}39m`
export const bgMagenta: Color = (v) => `${_}45m${v}${_}49m`
export const cyan: Color = (v) => `${_}36m${v}${_}39m`
export const bgCyan: Color = (v) => `${_}46m${v}${_}49m`
export const white: Color = (v) => `${_}37m${v}${_}39m`
export const bgWhite: Color = (v) => `${_}47m${v}${_}49m`
export const gray: Color = (v) => `${_}90m${v}${_}39m`
export const bgGray: Color = (v) => `${_}100m${v}${_}49m`
