import { formatRelative, parseISO, formatDistanceToNow } from 'date-fns'
export const getItem = (item) => {
  const results = localStorage.getItem(item)
  return JSON.parse(results)
}
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
export const formatDate = (date) => {
  let oldDate = new Date(date).getTime()
  let newDate = new Date().getTime()
  oldDate = oldDate.toString().slice(5, -5)
  newDate = newDate.toString().slice(5, -5)
  oldDate = Number(oldDate)
  newDate = Number(newDate)
  // console.log({ oldDate, newDate })
  // console.log(newDate - oldDate)

  if (newDate - oldDate > 15) {
    // if date is longer than 30 mins
    // format it like "today at 1:39 PM"
    const results = formatRelative(parseISO(date), new window.Date())
    return results
  } else {
    // if date is less than 30 mins
    // format it like "6 mins ago"
    const results = formatDistanceToNow(parseISO(date), {
      addSuffix: true,
    })
    return results
  }
}
