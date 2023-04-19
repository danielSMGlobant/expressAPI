export const toStatus = (value: any): boolean => {
  return String(value) === 'true'
}

export const toTermSearch = (value: any): string => {
  const term: string = typeof value !== 'undefined' ? value : ''
  return term
}
