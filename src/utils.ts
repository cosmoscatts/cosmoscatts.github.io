import dayjs from 'dayjs'

export const isDark = useDark()
export const toggleDark = useToggle(isDark)

export function formatDate(date: string | Date, year = true) {
  return year
    ? dayjs(date).format('MMM D, YYYY')
    : dayjs(date).format('MMM D')
}

export const isClient = typeof window !== 'undefined'
