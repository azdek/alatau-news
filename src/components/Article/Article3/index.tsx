import { CalendarOutlined } from '@ant-design/icons'
import cls from 'classnames'

import CardActions from 'components/CardActions'

import classes from './Article3.module.sass'

type Article3Props = {
  type?: 'main' | 'secondary'
}
export default function Article3({ type = 'main' }: Article3Props) {
  return (
    <div className={cls(classes.article3, { [classes[type]]: true })}>
      <div
        className={classes.article3_bg}
        style={{
          background: `url('/images/article-bgs/${Math.floor(Math.random() * 10 + 1)}.png') center center no-repeat`,
        }}
      />

      <div className={classes.article3_body}>
        <div className={classes.article3_date}>
          <CalendarOutlined />
          <span>ЧТ, 19 мая, 2022</span>
        </div>

        <div className={classes.article3_type}>Политика</div>

        <h3 className={classes.article3_title}>
          Leo vitae neque, nisi, id amet ullamcorper amet nunc sed. Donec commodo
        </h3>

        <CardActions />
      </div>
    </div>
  )
}
