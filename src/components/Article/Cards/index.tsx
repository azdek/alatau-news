import { CalendarOutlined } from '@ant-design/icons'
import cls from 'classnames'

import CardActions from 'components/CardActions'
import Button from 'components/UI/Button'

import classes from './Cards.module.sass'

type CardsProps = {
  type?: 'main' | 'secondary'
}
export default function Cards({ type = 'main' }: CardsProps) {
  return (
    <>
      <div className={cls(classes.cards, { [classes[type]]: true })}>
        <div
          className={classes.cards_bg}
          style={{
            background: `url('/images/article-bgs/${Math.floor(Math.random() * 10 + 1)}.png') center center no-repeat`,
          }}
        >
          <Button>Политика</Button>
        </div>
      </div>
      <div className={classes.cards_body}>
        <h3 className={classes.cards_title}>Leo vitae neque, nisi, id amet ullamcorper amet nunc sed. Donec commodo</h3>

        <CardActions />
      </div>
    </>
  )
}
