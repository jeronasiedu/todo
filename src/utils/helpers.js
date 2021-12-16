import { useState, useEffect } from 'react'
export const getItem = (item) => {
  const results = localStorage.getItem(item)
  return JSON.parse(results)
}
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const Greet = () => {
  const [hour, setHour] = useState(() => {
    return new Date().getHours()
  })
  useEffect(() => {
    setHour(hour)
  }, [hour])
  if (hour < 12) {
    return 'Good Morning'
  } else if (hour === 12) {
    return 'Good Noon'
  } else if (hour > 12 && hour <= 17) {
    return 'Good Afternoon'
  } else if (hour >= 17 && hour <= 24) {
    return 'Good evening'
  }
}
