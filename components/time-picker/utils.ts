
export const parseTime = (value: string | null): { hours: number, minutes: number } => {
  if (value === '' || value === null) {
    return { hours: 0, minutes: 0 }
  }

  const timeParts = value.split(':')

  if (timeParts.length < 3) {
    // throw new Error(`Incorrect time format: ${value}. Should be "hh:mm:ss"`)
    return { hours: 0, minutes: 0 }
  }

  const hours = parseInt(timeParts[0])
  const minutes = parseInt(timeParts[1])
  const seconds = parseInt(timeParts[2])

  if (isNaN(hours) || hours > 23 || hours < 0) {
    // throw new Error(`Invalid hours value: ${value}`)
    return { hours: 0, minutes: 0 }
  }

  if (isNaN(minutes) || minutes > 59 || minutes < 0) {
    // throw new Error(`Invalid minutes value: ${value}`)
    return { hours: 0, minutes: 0 }
  }

  if (isNaN(seconds) || seconds > 59 || seconds < 0) {
    // throw new Error(`Invalid seconds value: ${value}`)
    return { hours: 0, minutes: 0 }
  }

  return { hours, minutes }
}

const pad = (value: number): string => {
  return value.toString().padStart(2, '0')
}

export const stringifyTime = (hour: number, minute: number): string => {
  return `${pad(hour)}:${pad(minute)}:00`
}

export const stringifyHour = (hour: number, is24: boolean): string => {
  if (is24) {
    return pad(hour)
  }

  if (hour === 0 || hour === 12) {
    return '12'
  }

  return pad(hour % 12)
}

export const stringifyHourFace = (hour: number): string => {
  return hour === 0 ? '12' : hour === 12 ? '24' : String(hour)
}
export const stringifyMinute = (minute: number): string => {
  return pad(minute)
}

export const hourToIndex = (hour: number, is24: boolean): number => {
  if (is24) {
    if (hour === 0) {
      return 12
    }

    if (hour === 12) {
      return 0
    }

    return hour
  }

  return hour % 12
}

export const getNeedleRotationDeg = (elem: HTMLElement): number => {
  const match = elem.style.transform.match(/^rotate\((-?\d+)deg\)$/)

  if (match === null) {
    return 0
  }

  return Number(match[1])
}

export const getShortestCssDeg = (currentDeg: number, nextDeg: number): number => {
  const angle = currentDeg % 360
  const diff = (360 - (angle - nextDeg)) % 360

  if (diff > 180) {
    return currentDeg - 360 + diff
  }

  return currentDeg + diff
}
