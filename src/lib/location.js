export const removeSearch = (removeKeys = []) => {
  const searchStr = window.location.search.slice(1)
  let newSearchStr = ''
  if (searchStr) {
    newSearchStr = searchStr.split('&').filter((entry) => {
      const [k, _] = entry.split(('='))
      if(removeKeys.includes(k)) {
        return false
      }
      return true
    }).join('&')
  }
  window.location.href = window.location.origin + window.location.pathname + '?' + newSearchStr
}