import emojiDataJson from '../components/emoji-picker/data.json'

type TEmojiGroupEntry = {
  emoji: string,
  code: string,
  label: string,
  skins?: TEmojiGroupEntry[],
  tone: number | number[],
}
type TEmojiGroup = {
  name: string,
  emojis: TEmojiGroupEntry[],
}

const emojiGroups = emojiDataJson as TEmojiGroup[]
const EMOJI_REGEX = /\p{Emoji}/u
const EMOJI_REGEX_EX = /^[0-9*#]$/
// const EMOJI_REGEX = /\p{Extended_Pictographic}/u

const skippedEmojis: string[] = []

for (const { emojis } of emojiGroups) {
  for (const { emoji } of emojis) {
    if (!(EMOJI_REGEX.test(emoji) && !EMOJI_REGEX_EX.test(emoji))) {
      skippedEmojis.push(emoji)
    }
  }
}

const falsePositives: string[] = []

for (const smb of ['1', '*', '+', '&', '#', '@', '=', '_', '?']) {
  if (EMOJI_REGEX.test(smb) && !EMOJI_REGEX_EX.test(smb)) {
    falsePositives.push(smb)
  }
}

if (skippedEmojis.length > 0) {
  process.stdout.write('=== SKIPPED EMOJIS ===\n\n')
  skippedEmojis.forEach((emj) => process.stdout.write(`${emj} `))
  process.stdout.write('\n\n')
}

if (falsePositives.length > 0) {
  process.stdout.write('=== FALSE POSITIVES ===\n\n')
  falsePositives.forEach((smb) => process.stdout.write(`${smb} `))
  process.stdout.write('\n\n')
}

process.stdout.write('=== END ===\n')
