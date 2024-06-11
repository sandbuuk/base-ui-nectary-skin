export const CSV_DELIMITER = ','

export const packCsv = (values: string[]): string => {
  return values.join(CSV_DELIMITER)
}

export const unpackCsv = (csv: string): string[] => {
  return csv.length === 0 ? [] : csv.split(CSV_DELIMITER)
}

export const updateCsv = (csv: string, value: string, setActive: boolean): string => {
  const values = unpackCsv(csv)
  const index = values.indexOf(value)

  if (setActive) {
    if (index < 0) {
      values.push(value)
    }
  } else if (index >= 0) {
    values.splice(index, 1)
  }

  return packCsv(values)
}

export const getFirstCsvValue = (acc: string): string | null => {
  return acc.length === 0 ? null : unpackCsv(acc)[0]
}
