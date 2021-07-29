
export const orderByDates = (prev, current) => new Date(current.date) - new Date(prev.date)