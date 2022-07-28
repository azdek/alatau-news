export interface IRoute {
  href: string
  label: string
}
const ROUTES: { [key: string]: IRoute } = {
  main: {
    href: '/',
    label: 'Главная',
  },
  feed: {
    href: '/feed',
    label: 'Лента',
  },
  media: {
    href: '/media',
    label: 'Медиа',
  },
  contacts: {
    href: '/contacts',
    label: 'Контакты',
  },
  vacancies: {
    href: '/vacancies',
    label: 'Вакансии',
  },
  about: {
    href: '/about',
    label: 'О нас',
  },
}

export default ROUTES
