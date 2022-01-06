import {
  formatRelative,
  parseISO,
  formatDistanceToNow,
  differenceInHours,
} from 'date-fns'
export const getItem = (item) => {
  const results = localStorage.getItem(item)
  return JSON.parse(results)
}
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
export const formatDate = (date) => {
  let oldDate = parseISO(date)
  let newDate = new Date()
  const difference = differenceInHours(newDate, oldDate)
  if (difference > 1) {
    // if date is longer than an hour
    // format it like "today at 1:39 PM"
    const results = formatRelative(parseISO(date), new window.Date())
    return results
  } else {
    // if date is less than an hour
    // format it like "6 mins ago"
    const results = formatDistanceToNow(parseISO(date), {
      addSuffix: true,
    })
    return results
  }
}
