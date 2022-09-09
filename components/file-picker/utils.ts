export const doFilesSatisfySize = (files: File[], size: number | null): boolean => {
  if (size === null || size <= 0) {
    return true
  }

  return files.every((file) => {
    return file.size <= size
  })
}
