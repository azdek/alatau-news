import classes from './CardSenior.module.sass'
import { CalendarOutlined } from '@ant-design/icons'
import CardActions from 'components/CardActions'

export default function SocialCard() {
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div
          className={classes.logo}
          style={{
            background: `url('/images/article-bgs/${Math.floor(Math.random() * 10 + 1)}.png') center center no-repeat`,
          }}
        ></div>

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
    </div>
  )
}
