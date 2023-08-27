import { readFile, writeFile } from 'fs/promises'
import path from 'path'
import { parse } from 'csv-parse/sync'
import countriesJson from '../components/utils/countries.json'

type TSinchCountry = {
  name: string,
  phoneCode: string,
}

const countries = countriesJson as Record<string, TSinchCountry>
const countryEntries = Object.entries(countries)

const formatsCache = new Map<string, string[][]>()
const getFormatsCsv = async (code: string): Promise<string[][]> => {
  if (formatsCache.has(code)) {
    return formatsCache.get(code)!
  }

  const formatStr = await readFile(path.resolve('./metadata', code, 'formats.csv'), { encoding: 'utf-8' })
  const csv = parse(formatStr, { delimiter: ';', relaxQuotes: true, relaxColumnCount: true }) as string[][]

  formatsCache.set(code, csv)

  return csv
}
const examplesCache = new Map<string, string[][]>()
const getExamplesCsv = async (code: string): Promise<string[][]> => {
  if (examplesCache.has(code)) {
    return examplesCache.get(code)!
  }

  const examplesStr = await readFile(path.resolve('./metadata', code, 'examples.csv'), { encoding: 'utf-8' })
  const csv = parse(examplesStr, { delimiter: ';', relaxQuotes: true, relaxColumnCount: true }) as string[][]

  examplesCache.set(code, csv)

  return csv
}
const getMobileExample = (parsedExamples: string[][]): string | null => {
  for (let i = 1; i < parsedExamples.length; i++) {
    const line = parsedExamples[i]
    const exampleType = line[1].trim()

    if (exampleType === 'MOBILE') {
      return line[2].replaceAll('"', '').trim()
    }
  }

  return null
}
const sanitizeFormat = (format: string) => {
  return format
    .replaceAll('"', '')
    .replaceAll('#@-', '')
    .replaceAll('#', '')
    .replaceAll('@', '')
    .replaceAll('0', '')
    .replaceAll('{', '')
    .replaceAll('*', '')
    .replaceAll('>}', ' ')
    .replaceAll('.', ' ')
    .trim()
    .replaceAll(' ', '-')
    .replaceAll('X', '0')
}
const isFormatVariableRange = (format: string) => {
  return format.includes('*')
}
const numFormatDigits = (format: string) => {
  let num = 0

  for (let i = 0; i < format.length; i++) {
    if (format.charAt(i) === '0') {
      num++
    }
  }

  return num
}
const FORMAT_INT_COLUMN_INDEX = 2
const FORMAT_TITLE_COLUMN_INDEX = 0
const searchFormatTitles = ['mobile', 'non_geo', 'fmt', 'all', 'new']
const getInternationalFormat = (parsedFormats: string[][], expectedLength: number | null): string | null => {
  if (parsedFormats.length === 2) {
    return sanitizeFormat(parsedFormats[1][FORMAT_INT_COLUMN_INDEX])
  }

  for (const searchFor of searchFormatTitles) {
    for (let i = 1; i < parsedFormats.length; i++) {
      const line = parsedFormats[i]
      const formatTitle = line[FORMAT_TITLE_COLUMN_INDEX]

      if (formatTitle.startsWith(searchFor)) {
        const fmt = sanitizeFormat(line[FORMAT_INT_COLUMN_INDEX])

        if (isFormatVariableRange(fmt)) {
          continue
        }

        if (expectedLength === null || numFormatDigits(fmt) === expectedLength) {
          return fmt
        }
      }
    }
  }

  return null
}

const getActualCode = (code: string) => {
  if (code.startsWith('1')) {
    return '1'
  } else if (code.startsWith('44')) {
    return '44'
  } else if (code.startsWith('7')) {
    return '7'
  } else if (code.startsWith('39')) {
    return '39'
  }

  return code
}

for (const [abr, { phoneCode }] of countryEntries) {
  const code = phoneCode.substring(1)
  const countryCode = getActualCode(code)
  const [formats, examples] = await Promise.all([
    getFormatsCsv(countryCode),
    getExamplesCsv(countryCode),
  ])

  const mobileExample = getMobileExample(examples)
  const formatMask = getInternationalFormat(formats, mobileExample?.length ?? null)

  console.log(code, mobileExample, formatMask)

  ;(countries[abr] as any).phoneMask = formatMask
}

await writeFile('./coutries.json', JSON.stringify(countries, null, 2), { encoding: 'utf-8' })
