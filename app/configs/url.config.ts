export const getEventUrl = (slug:string) => `/event/${slug}`

//https://www.wildberries.ru/catalog/160134740/detail.aspx
export const getItemUrl = (slug:string) => `https://www.wildberries.ru/catalog/${slug.slice(2)}/detail.aspx`
export const getSubjectUrl = (slug:string) => `/subject/${slug}`

export const getAdminUrl =(url:string) => `/manage/${url}`
export const getAdminHomeUrl =() => getAdminUrl('').slice(0,-1)