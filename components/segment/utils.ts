import type { TSinchTitleType } from '../title/types'
import type { TSinchSize } from '../utils/size'

export const getTitleTypeFromSize = (size: TSinchSize): TSinchTitleType => {
  switch (size) {
    case 'l': {
      return 'l'
    }
    case 's': {
      return 's'
    }
    default: {
      return 'm'
    }
  }
}
