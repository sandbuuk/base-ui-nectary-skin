export const VERSION_KEY = 'version'

const supportedParams = [VERSION_KEY]

const getSearchKeys = (params: URLSearchParams): string[] => {
  const res: string[] = []

  params.forEach((_, k) => res.push(k))

  return res
}

type TClearSearchParams = {
  (params: string): URLSearchParams,
  (params: URLSearchParams): URLSearchParams,
}

export const filterSupportedParams: TClearSearchParams = (params) => {
  let searchParams: URLSearchParams

  if (typeof params === 'string') {
    searchParams = new URLSearchParams(params)
  } else {
    searchParams = params
  }

  for (const k of getSearchKeys(searchParams)) {
    if (!supportedParams.includes(k)) {
      searchParams.delete(k)
    }
  }

  return searchParams
}

export const areSupportedParamsEqual = (a: URLSearchParams | null, b: URLSearchParams | null) => {
  if (a === null || b === null) {
    return a === b
  }

  for (const p of supportedParams) {
    if (a.get(p) !== b.get(p)) {
      return false
    }
  }

  return true
}
