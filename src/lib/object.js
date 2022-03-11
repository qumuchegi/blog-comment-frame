export const entriesToObj = (entriesStr, splitChar, convertValue) => {
  return entriesStr.split(splitChar || '&')
    .reduce((obj = {}, entry) => {
      const [k, v] = entry.split('=')
      return Object.assign(
        {},
        obj,
        {
          [k.trim()]: convertValue ? convertValue(v) : v
        }
      )
    }, {})
}