export const getUid = () =>
  crypto.getRandomValues(new Uint8Array(21)).reduce((id, byte) => {
    const nextByte = byte & 63

    if (nextByte < 36) {
      return id + nextByte.toString(36)
    }

    if (nextByte < 62) {
      return id + (nextByte - 26).toString(36).toUpperCase()
    }

    if (nextByte > 62) {
      return `${id}-`
    }

    return `${id}_`
  }, '')
