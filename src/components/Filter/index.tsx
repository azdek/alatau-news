import { useState } from 'react'

import cls from 'classnames'

import classes from './Filter.module.sass'

type FilterProps = {
  title: string
}
export default function Filter({ title }: FilterProps) {
  const [activeValue, setActiveValue] = useState(0)

  return (
    <div className={classes.wrapper}>
      <h1>{title}</h1>

      <ul className={classes.list}>
        {filterTypes.map((f) => (
          <li
            key={f.value}
            className={cls({ [classes.active]: activeValue === f.value })}
            onClick={() => setActiveValue(f.value)}
          >
            {f.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

interface IFilter {
  label: string
  value: number
}
const filterTypes: IFilter[] = [
  { label: 'Все', value: 0 },
  { label: 'Политика', value: 1 },
  { label: 'В мире', value: 2 },
  { label: 'Спорт', value: 3 },
  { label: 'Культура', value: 4 },
  { label: 'Экономика', value: 5 },
  { label: 'Наука', value: 6 },
]
