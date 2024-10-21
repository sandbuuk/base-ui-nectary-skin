export const areFilesAccepted = (files: File[], accept: string | null): boolean => {
  if (accept === null) {
    return true
  }

  const acceptValues = accept.split(/\s*,\s*/)

  return files.every((file) => {
    return acceptValues.some((acceptValue) => {
      if (acceptValue.startsWith('.')) {
        return file.name.endsWith(acceptValue)
      }

      if (acceptValue === 'image/*') {
        return file.type.startsWith('image/')
      }

      if (acceptValue === 'video/*') {
        return file.type.startsWith('video/')
      }

      if (acceptValue === 'audio/*') {
        return file.type.startsWith('audio/')
      }

      return acceptValue === file.type
    })
  })
}

export const areItemsAccepted = (item: DataTransferItem[], accept: string | null): boolean => {
  if (accept === null) {
    return true
  }

  const acceptValues = accept.split(/\s*,\s*/)

  return item.every((file) => {
    return acceptValues.some((acceptValue) => {
      if (acceptValue === 'image/*') {
        return file.type.startsWith('image/')
      }

      if (acceptValue === 'video/*') {
        return file.type.startsWith('video/')
      }

      if (acceptValue === 'audio/*') {
        return file.type.startsWith('audio/')
      }

      return acceptValue === file.type
    })
  })
}

export const doFilesSatisfySize = (files: File[], size: number | null): boolean => {
  if (size === null || size <= 0) {
    return true
  }

  return files.every((file) => {
    return file.size <= size
  })
}
