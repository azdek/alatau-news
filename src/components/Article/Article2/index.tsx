import { CalendarOutlined } from '@ant-design/icons'
import cls from 'classnames'

import CardActions from 'components/CardActions'

import classes from './Article2.module.sass'

type ArticleProps = {
  type?: 'main' | 'secondary'
}
export default function Article2({ type = 'main' }: ArticleProps) {
  return (
    <div className={cls(classes.article, { [classes[type]]: true })}>
      <div
        className={classes.article_bg}
        style={{
          background: `url('/images/article-bgs/${Math.floor(Math.random() * 10 + 1)}.png') center center no-repeat`,
        }}
      />

      <div className={classes.article_body}>
        <div className={classes.article_date}>
          <CalendarOutlined />
          <span>ЧТ, 19 мая, 2022</span>
        </div>

        <div className={classes.article_type}>Политика</div>

        <h3 className={classes.article_title}>
          Leo vitae neque, nisi, id amet ullamcorper amet nunc sed. Donec commodo
        </h3>

        <CardActions />
      </div>
    </div>
  )
}
