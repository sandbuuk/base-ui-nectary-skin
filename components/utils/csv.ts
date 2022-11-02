const unpackCsv = (csv: string): string[] => {
  return csv === '' ? [] : csv.split(',')
}

const packCsv = (values: Set<string>): string => {
  return Array.from(values).join(',')
}

export const getCsvSet = (acc: string): Set<string> => {
  return new Set(unpackCsv(acc))
}

export const updateCsv = (acc: string, value: string, setActive: boolean): string => {
  const values = getCsvSet(acc)

  if (setActive) {
    values.add(value)
  } else {
    values.delete(value)
  }

  return packCsv(values)
}

export const getFirstCsvValue = (acc: string): string | null => {
  return acc === '' ? null : unpackCsv(acc)[0]
}
