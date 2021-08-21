import { format, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'

export const orderByDates = (prev, current) => new Date(current.date) - new Date(prev.date)

export const formatDate = (date) =>
  format(parseISO(date), 'd MMMM, yyyy', {
    locale: es
  })
