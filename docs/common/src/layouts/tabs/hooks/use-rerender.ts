import { useCallback, useState } from 'react'

const EMPTY_DEPS: any[] = []

export const useRerender = () => {
  const [_, setState] = useState<any>(null)

  return useCallback(() => setState({}), EMPTY_DEPS)
}
