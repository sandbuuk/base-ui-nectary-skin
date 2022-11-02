import { readdir, writeFile } from 'fs/promises'
import path from 'path'
import emojis from 'emojibase-data/en/data.json'

type TEmoji = {
  label: string,
  hexcode: string,
  tags: string[],
  emoji: string,
  text: string,
  type: number,
  order: number,
  group: number,
  subgroup: number,
  version: number,
  emoticon?: string,
  skins?: TEmoji[],
  tone?: number | number[],
}

const assetsDirPath = path.resolve('../twemoji/assets/svg')
const assetsDirEntries = await readdir(assetsDirPath, { withFileTypes: false })
const assetsDirEntriesNames = assetsDirEntries.map((ent) => path.basename(ent, '.svg'))

const getEmojiFilename = (hexcode: string): string | null => {
  let name = hexcode

  if (name === '1f441-fe0f-200d-1f5e8-fe0f') {
    name = '1f441-200d-1f5e8'
  }

  if (name.startsWith('00')) {
    name = name.substring(2).replace(/-fe0f/i, '')
  }

  const index = assetsDirEntriesNames.indexOf(name)

  if (index >= 0) {
    return assetsDirEntries[index]
  }

  return null
}

const emojiIterable = {
  *[Symbol.iterator]() {
    for (const em of emojis as TEmoji[]) {
      const filename = getEmojiFilename(em.hexcode.toLowerCase())

      if (filename !== null) {
        yield { ...em, filename }
      }
    }
  },
}

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

const groupNames = [
  'smileys-emotion',
  'people-body',
  'component',
  'animals-nature',
  'food-drink',
  'travel-places',
  'activities',
  'objects',
  'symbols',
  'flags',
]
let emojiGroups: TEmojiGroup[] = groupNames.map((name) => ({
  name,
  emojis: [],
}))

const isVersionOk = (emoji: TEmoji) => {
  return emoji.version < 14
}

const normalizeHexcode = (hexcode: string): string => {
  let code = hexcode.toLowerCase()

  // Fix for "Eye in Speech Bubble" emoji
  if (code === '1f441-fe0f-200d-1f5e8-fe0f') {
    code = '1f441-200d-1f5e8'
  }

  // Fix for "copyright" and "trademark" emojis
  if (code.startsWith('00')) {
    code = code.substring(2).replace(/-fe0f/, '')
  }

  return code
}

const addToGroup = (emoji: TEmoji) => {
  const entry: TEmojiGroupEntry = {
    emoji: emoji.emoji,
    label: emoji.label,
    code: normalizeHexcode(emoji.hexcode),
    tone: 0,
  }

  if (emoji.skins != null) {
    entry.skins = emoji.skins
      .filter(isVersionOk)
      .map((skin) => ({
        emoji: skin.emoji,
        label: skin.label,
        code: normalizeHexcode(skin.hexcode),
        tone: skin.tone!,
      }))
  }

  let group = emoji.group

  if (group === 9) {
    group = 8
  }

  emojiGroups[group].emojis.push(entry)
}

for (const emoji of emojiIterable) {
  if (!isVersionOk(emoji)) {
    continue
  }

  if (emoji.group == null || emoji.group === 2) {
    continue
  }

  addToGroup(emoji)
}

emojiGroups = emojiGroups.filter((group) => group.emojis.length > 0)

const pickerDataJsonDir = path.join('./components/emoji-picker/', 'data.json')

await writeFile(pickerDataJsonDir, JSON.stringify(emojiGroups), { encoding: 'utf-8' })
