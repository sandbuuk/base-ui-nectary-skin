export const camelToKebab = (str: string): string => {
  if (str.length === 0) {
    return str
  }

  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
}

export const objectToQueryString = <T extends Record<string, Record<string, any>>>(object: T): string => {
  const params = new URLSearchParams()

  for (const [prefix, obj] of Object.entries(object)) {
    const kebabPrefix = camelToKebab(prefix)

    for (const [key, value] of Object.entries(obj)) {
      const kebabKey = camelToKebab(key)

      params.set(`${kebabPrefix}-${kebabKey}`, String(value))
    }
  }

  return params.toString()
}
