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
    let results = formatDistanceToNow(parseISO(date), {
      addSuffix: true,
    })
    if (results === 'less than a minute ago') {
      results = 'just now'
    }
    return results
  }
}
export const requestNotification = () => {
  Notification.requestPermission().then((result) => {
    if (result === 'granted') {
      console.log('Notification was granted')
    }
  })
}
export function randomNotification() {
  const notifTitle = 'This is the title'
  const notifBody = `Notification body goes here`
  const notifImg = `/logo.png`
  const options = {
    body: notifBody,
    icon: notifImg,
  }
  new Notification(notifTitle, options)
  setTimeout(randomNotification, 30000)
}
