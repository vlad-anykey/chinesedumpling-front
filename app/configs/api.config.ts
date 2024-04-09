export const API_URL = `${process.env.APP_URL}`

export const getAuthUrl = (string: string) => `/api/auth${string}`
export const getUsersUrl = (string: string) => `/api/users${string}`
export const getItemsUrl = (string: string) => `/api/items${string}`
export const getEventsUrl = (string: string) => `/api/events${string}`
export const getSubjectsUrl = (string: string) => `/api/subjects${string}`
