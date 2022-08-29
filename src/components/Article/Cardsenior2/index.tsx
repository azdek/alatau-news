import { CalendarOutlined } from '@ant-design/icons'
import cls from 'classnames'

import CardActions from 'components/CardActions'

import classes from './Cardsenior2.module.sass'

type CardseniorProps = {
  type?: 'main' | 'secondary'
}
export default function Cardsenior2({ type = 'main' }: CardseniorProps) {
  return (
    <div className={cls(classes.cardsenior, { [classes[type]]: true })}>
      <div />

      <div className={classes.cardsenior_body}>
        <div className={classes.cardsenior_date}>
          <CalendarOutlined />
          <span>ЧТ, 19 мая, 2022</span>
        </div>

        <div className={classes.cardsenior_type}>Политика</div>

        <h3 className={classes.cardsenior_title}>
          Leo vitae neque, nisi, id amet ullamcorper amet nunc sed. Donec commodo
        </h3>

        <CardActions />
      </div>
    </div>
  )
}
