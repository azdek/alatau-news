import { CalendarOutlined } from '@ant-design/icons'
import cls from 'classnames'

import CardActions from 'components/CardActions'

import classes from './CardPainter.module.sass'

type PointerProps = {
  type?: 'main' | 'secondary'
}
export default function CardPointer({ type = 'main' }: PointerProps) {
  return (
    <>
      <div className={cls(classes.pointer, { [classes[type]]: true })}>
        <div
        // className={classes.pointer_bg}
        // style={{
        //   background: `url('/images/article-bgs/${Math.floor(Math.random() * 10 + 1)}.png') center center no-repeat`,
        // }}
        />
        <div className={classes.pointer_body}>
          <div className={classes.pointer_date}>
            <CalendarOutlined />
            <span>ЧТ, 19 мая, 2022</span>
          </div>

          <div className={classes.pointer_type}>Политика</div>

          <h3 className={classes.pointer_title}>
            Leo vitae neque, nisi, id amet ullamcorper amet nunc sed. Donec commodo
          </h3>
          <div className={classes.pointer_card}>
            <CardActions />
          </div>
          <div
            className={classes.pointer_img}
            style={{
              background: `url('/images/article-bgs/${Math.floor(
                Math.random() * 10 + 1
              )}.png') center center no-repeat`,
            }}
          ></div>
        </div>
      </div>
    </>
  )
}
