import { CalendarOutlined } from '@ant-design/icons'
import cls from 'classnames'

import CardActions from 'components/CardActions'

import classes from './Cardsenior3.module.sass'

type Cardsenior3Props = {
  type?: 'main' | 'secondary'
}
export default function Cardsenior3({ type = 'main' }: Cardsenior3Props) {
  return (
    <div className={cls(classes.cardsenior3, { [classes[type]]: true })}>
      <div />

      <div className={classes.cardsenior3_body}>
        <div className={classes.cardsenior3_date}>
          <CalendarOutlined />
          <span>ЧТ, 19 мая, 2022</span>
        </div>

        <div className={classes.cardsenior3_type}>Политика</div>

        <h3 className={classes.cardsenior3_title}>
          Leo vitae neque, nisi, id amet ullamcorper amet nunc sed. Donec commodo
        </h3>

        <CardActions />
      </div>
    </div>
  )
}
