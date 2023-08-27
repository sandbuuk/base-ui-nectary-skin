/* eslint-disable max-params */
import type { TSinchInputType } from './types'

type TSInchInputMaskSymbolModeDigit = 0
type TSInchInputMaskSymbolModeLetter = 1
type TSInchInputMaskSymbolModeExact = 2
type TSinchInputMaskSymbol = {
  value: string,
  mode: TSInchInputMaskSymbolModeDigit | TSInchInputMaskSymbolModeLetter | TSInchInputMaskSymbolModeExact,
  placeholder: string,
}

type TSinchMaskInputResult = {
  value: string,
  placeholder: string,
  cursorPos: number,
  mergedValue: string,
}

export const inputTypes: readonly TSinchInputType[] = ['text', 'password']

const MASK_SYMBOL_LETTER = 'A'
const MASK_SYMBOL_DIGIT = '0'
const EMPTY_CHAR = ' '
const MASK_MODE_DIGIT: TSInchInputMaskSymbolModeDigit = 0
const MASK_MODE_LETTER: TSInchInputMaskSymbolModeLetter = 1
const MASK_MODE_EXACT: TSInchInputMaskSymbolModeExact = 2
const MASK_PLACEHOLDER_DELIMITER = '@@'
const MASK_PLACEHOLDER = '_'

const testMaskedValue = (maskSymbol: TSinchInputMaskSymbol, inputChar: string): boolean => {
  switch (maskSymbol.mode) {
    case MASK_MODE_DIGIT: {
      return /\d/.test(inputChar)
    }
    case MASK_MODE_LETTER: {
      return /\p{Letter}/u.test(inputChar)
    }
  }

  return false
}

const isExactMode = (maskSymbol: TSinchInputMaskSymbol) => maskSymbol.mode === MASK_MODE_EXACT
const isEmptyChar = (char: string) => char === EMPTY_CHAR

export const getMaskSymbols = (maskValue: string): TSinchInputMaskSymbol[] => {
  const res: TSinchInputMaskSymbol[] = []
  const [mask, placeholder] = maskValue.split(MASK_PLACEHOLDER_DELIMITER)
  const maskSymbols = [...mask]
  const placeholderChars = placeholder != null ? [...placeholder] : []

  for (let maskIndex = 0, placeholderIndex = 0; maskIndex < maskSymbols.length; maskIndex++, placeholderIndex++) {
    if (maskSymbols[maskIndex] === '\\') {
      maskIndex += 1
      res.push({
        value: maskSymbols[maskIndex],
        mode: MASK_MODE_EXACT,
        placeholder: placeholderChars[placeholderIndex] ?? maskSymbols[maskIndex],
      })

      continue
    }

    if (maskSymbols[maskIndex] === MASK_SYMBOL_LETTER || maskSymbols[maskIndex] === MASK_SYMBOL_DIGIT) {
      res.push({
        value: maskSymbols[maskIndex],
        mode: maskSymbols[maskIndex] === MASK_SYMBOL_LETTER ? MASK_MODE_LETTER : MASK_MODE_DIGIT,
        placeholder: placeholderChars[placeholderIndex] ?? MASK_PLACEHOLDER,
      })

      continue
    }

    res.push({
      value: maskSymbols[maskIndex],
      mode: MASK_MODE_EXACT,
      placeholder: placeholderChars[placeholderIndex] ?? maskSymbols[maskIndex],
    })
  }

  return res
}

const clearCharsSelection = (chars: string[], selectionStart: number, selectionEnd: number): void => {
  for (let i = selectionStart; i < selectionEnd && i < chars.length; i++) {
    chars[i] = EMPTY_CHAR
  }
}

const getPlaceholder = (chars: readonly string[], maskSymbols: readonly TSinchInputMaskSymbol[]): string => {
  const res: string[] = new Array(maskSymbols.length)

  for (let i = 0; i < maskSymbols.length; i++) {
    res[i] = i >= chars.length || isEmptyChar(chars[i]) || isExactMode(maskSymbols[i])
      ? maskSymbols[i].placeholder
      : EMPTY_CHAR
  }

  return res.join('')
}

const isMaskedInputComplete = (chars: readonly string[], maskSymbols: readonly TSinchInputMaskSymbol[]): boolean => {
  if (chars.length > maskSymbols.length) {
    throw new Error('chars.length > maskSymbols.length')
  }

  if (chars.length < maskSymbols.length) {
    return false
  }

  for (let i = 0; i < maskSymbols.length; i++) {
    if (i >= chars.length || (!isExactMode(maskSymbols[i]) && !testMaskedValue(maskSymbols[i], chars[i]))) {
      return false
    }
  }

  return true
}

const getCharsFromInputValue = (inputValue: string, maskSymbols: readonly TSinchInputMaskSymbol[]): string[] => {
  const chars: string[] = new Array(maskSymbols.length)
  let i = 0

  for (const c of inputValue) {
    chars[i++] = c
  }

  chars.fill(EMPTY_CHAR, i)

  return chars
}

const isCursorAtTheBeginning = (maskSymbols: readonly TSinchInputMaskSymbol[], selectoinStart: number): boolean => {
  if (selectoinStart >= maskSymbols.length) {
    return false
  }

  for (let i = 0; i < selectoinStart; i++) {
    if (!isExactMode(maskSymbols[i])) {
      return false
    }
  }

  return true
}

const getMergedValue = (chars: readonly string[], maskSymbols: readonly TSinchInputMaskSymbol[]): string => {
  if (!isMaskedInputComplete(chars, maskSymbols)) {
    return ''
  }

  const res: string[] = new Array(chars.length)

  for (let i = 0; i < chars.length; i++) {
    res[i] = isExactMode(maskSymbols[i])
      ? maskSymbols[i].value
      : chars[i]
  }

  return res.join('')
}

const findLastNonEmptyCharIndex = (chars: readonly string[]) => {
  for (let i = chars.length - 1; i >= 0; i--) {
    if (!isEmptyChar(chars[i])) {
      return i
    }
  }

  return -1
}

const compileResult = (chars: string[], maskSymbols: readonly TSinchInputMaskSymbol[], cursorPos: number) => {
  if (chars.length > maskSymbols.length) {
    chars.length = maskSymbols.length
  }

  let lastEmptyPos = findLastNonEmptyCharIndex(chars) + 1

  while (lastEmptyPos < maskSymbols.length && isExactMode(maskSymbols[lastEmptyPos])) {
    ++lastEmptyPos
  }

  if (lastEmptyPos < chars.length) {
    chars.length = lastEmptyPos
  }

  return {
    value: chars.join(''),
    placeholder: getPlaceholder(chars, maskSymbols),
    cursorPos: Math.min(cursorPos, chars.length),
    mergedValue: getMergedValue(chars, maskSymbols),
  }
}

export const deleteContentBackward = (inputValue: string, maskSymbols: readonly TSinchInputMaskSymbol[], selectionStart: number, selectionEnd: number): TSinchMaskInputResult | null => {
  if (selectionEnd === 0) {
    // Cursor is at the start
    return null
  }

  const chars = getCharsFromInputValue(inputValue, maskSymbols)

  // Delete selected characters range
  if (selectionStart !== selectionEnd) {
    clearCharsSelection(chars, selectionStart, selectionEnd)

    return compileResult(chars, maskSymbols, selectionStart)
  }

  let cusrsorPos = selectionStart

  // Skip exact-match symbols
  while (cusrsorPos > 0 && isExactMode(maskSymbols[cusrsorPos - 1])) {
    --cusrsorPos
  }

  // If still has symbol to delete
  if (cusrsorPos > 0) {
    // Replace one symbol with mask
    clearCharsSelection(chars, cusrsorPos - 1, cusrsorPos)

    do {
      --cusrsorPos
    } while (cusrsorPos > 0 && isExactMode(maskSymbols[cusrsorPos - 1]))
  }

  return compileResult(chars, maskSymbols, cusrsorPos)
}

export const deleteContentForward = (inputValue: string, maskSymbols: readonly TSinchInputMaskSymbol[], selectionStart: number, selectionEnd: number): TSinchMaskInputResult | null => {
  if (selectionStart >= maskSymbols.length) {
    return null
  }

  const chars = getCharsFromInputValue(inputValue, maskSymbols)

  // Delete selected characters range
  if (selectionStart !== selectionEnd) {
    clearCharsSelection(chars, selectionStart, selectionEnd)

    return compileResult(chars, maskSymbols, selectionEnd)
  }

  let cursorPos = selectionStart

  // Skip exact-match symbols
  while (cursorPos < maskSymbols.length && isExactMode(maskSymbols[cursorPos])) {
    cursorPos++
  }

  if (cursorPos < chars.length) {
    // Replace one symbol with mask
    clearCharsSelection(chars, cursorPos, cursorPos + 1)
  }

  return compileResult(chars, maskSymbols, cursorPos + 1)
}

export const beginMaskedComposition = (inputValue: string, maskSymbols: readonly TSinchInputMaskSymbol[], selectionStart: number): Pick<TSinchMaskInputResult, 'value' | 'placeholder'> => {
  const chars = getCharsFromInputValue(inputValue, maskSymbols)
  const placeholder: string[] = new Array(chars.length)

  for (let i = 0; i < maskSymbols.length; i++) {
    placeholder[i] = isEmptyChar(chars[i]) || isExactMode(maskSymbols[i])
      ? maskSymbols[i].placeholder
      : EMPTY_CHAR
  }

  placeholder[selectionStart] = EMPTY_CHAR

  // Splice single character, since browsers add CompositionChar even if 'beforeinput' tries to prevent it
  chars.splice(selectionStart, 1)

  return {
    value: chars.join(''),
    placeholder: placeholder.join(''),
  }
}

export const endMaskedComposition = (inputValue: string, data: string, maskSymbols: readonly TSinchInputMaskSymbol[], selectionStart: number, wasValueInserted: boolean): TSinchMaskInputResult | null => {
  let cursorPos = selectionStart
  const chars = getCharsFromInputValue(inputValue, maskSymbols)
  const dataChars = [...data]

  // Safari lacks composed symbol in the input.value
  // Other browsers already have composed symbol in the input.value
  if (!wasValueInserted) {
    // Insert composed symbol
    chars.splice(cursorPos, 0, ...dataChars)
    // Trim chars length
    chars.length = maskSymbols.length
    cursorPos += dataChars.length
  }

  // Remove entered Composed Character
  // Composed Character is force inserted by browser
  cursorPos -= dataChars.length
  clearCharsSelection(chars, cursorPos, cursorPos + dataChars.length)

  // Skip placeholder symbols
  while (cursorPos < maskSymbols.length && isExactMode(maskSymbols[cursorPos])) {
    cursorPos++
  }

  // If reached end, while skipping
  if (cursorPos >= maskSymbols.length) {
    return compileResult(chars, maskSymbols, cursorPos)
  }

  for (let dataPos = 0; dataPos < dataChars.length && cursorPos < maskSymbols.length; ++dataPos, ++cursorPos) {
    const data = dataChars[dataPos]

    // Test and insert input char
    if (isEmptyChar(chars[cursorPos]) && testMaskedValue(maskSymbols[cursorPos], data)) {
      chars[cursorPos] = data
    }
  }

  // Skip placeholder symbols
  while (cursorPos < maskSymbols.length && isExactMode(maskSymbols[cursorPos])) {
    cursorPos++
  }

  return compileResult(chars, maskSymbols, cursorPos)
}

export const insertText = (inputValue: string, data: string, maskSymbols: readonly TSinchInputMaskSymbol[], selectionStart: number, selectionEnd: number): TSinchMaskInputResult | null => {
  const chars = getCharsFromInputValue(inputValue, maskSymbols)
  let cursorPos = selectionStart

  clearCharsSelection(chars, selectionStart, selectionEnd)

  // Skip placeholder symbols (put cursor onto next editable position)
  while (cursorPos < maskSymbols.length && isExactMode(maskSymbols[cursorPos])) {
    cursorPos++
  }

  // If reached end, while skipping
  if (cursorPos >= maskSymbols.length) {
    return compileResult(chars, maskSymbols, cursorPos)
  }

  // Test and insert input char
  if (testMaskedValue(maskSymbols[cursorPos], data)) {
    if (cursorPos >= chars.length) {
      chars.length = cursorPos + 1
    }

    chars[cursorPos] = data

    // Skip placeholder symbols (put cursor onto next editable position)
    do {
      cursorPos++
    } while (cursorPos < maskSymbols.length && isExactMode(maskSymbols[cursorPos]))
  }

  return compileResult(chars, maskSymbols, cursorPos)
}

export const insertFromPaste = (inputValue: string, data: string, maskSymbols: readonly TSinchInputMaskSymbol[], selectionStart: number, selectionEnd: number): TSinchMaskInputResult | null => {
  const chars = getCharsFromInputValue(inputValue, maskSymbols)
  let cursorPos = selectionStart

  clearCharsSelection(chars, selectionStart, selectionEnd)

  if (isCursorAtTheBeginning(maskSymbols, cursorPos)) {
    cursorPos = 0
  } else {
    // Skip placeholder symbols (put cursor onto next editable position)
    while (cursorPos < maskSymbols.length && isExactMode(maskSymbols[cursorPos])) {
      cursorPos++
    }
  }

  // If reached end, while skipping
  if (cursorPos >= maskSymbols.length) {
    return compileResult(chars, maskSymbols, cursorPos)
  }

  const dataChars = [...data]

  for (let dataPos = 0; dataPos < dataChars.length && cursorPos < maskSymbols.length;) {
    const data = dataChars[dataPos]
    const maskSymbol = maskSymbols[cursorPos]

    if (isExactMode(maskSymbol)) {
      if (maskSymbol.value === data) {
        ++dataPos
      }

      ++cursorPos
    } else {
      if (testMaskedValue(maskSymbol, data)) {
        chars[cursorPos] = data
        ++cursorPos
      }

      ++dataPos
    }
  }

  return compileResult(chars, maskSymbols, cursorPos)
}

export const splitValueAndMask = (inputValue: string, maskSymbols: readonly TSinchInputMaskSymbol[]): TSinchMaskInputResult => {
  const chars = getCharsFromInputValue('', maskSymbols)
  const dataChars = getCharsFromInputValue(inputValue, maskSymbols)
  let cursorPos = 0

  for (let dataPos = 0; dataPos < dataChars.length && cursorPos < maskSymbols.length;) {
    const data = dataChars[dataPos]
    const maskSymbol = maskSymbols[cursorPos]

    if (isExactMode(maskSymbol)) {
      if (maskSymbol.value === data) {
        ++dataPos
      }

      ++cursorPos
    } else {
      if (testMaskedValue(maskSymbol, data)) {
        chars[cursorPos] = data
        ++cursorPos
      }

      ++dataPos
    }
  }

  return compileResult(chars, maskSymbols, chars.length)
}

export const getMergedValueSliced = (inputValue: string, maskSymbols: readonly TSinchInputMaskSymbol[], selectionStart: number, selectionEnd: number): string => {
  const chars = getCharsFromInputValue(inputValue, maskSymbols)

  for (let i = selectionStart; i < selectionEnd && i < maskSymbols.length; i++) {
    if (isExactMode(maskSymbols[i])) {
      chars[i] = maskSymbols[i].value
    }
  }

  return chars.slice(selectionStart, selectionEnd).join('')
}
