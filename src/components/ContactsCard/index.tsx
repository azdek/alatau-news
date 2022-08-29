import { Button } from 'react-bootstrap'
import classes from './Contacts.module.sass'

export default function CardSenior() {
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div
          className={classes.header__logo}
          style={{
            background: `url('/images/article-bgs/${Math.floor(Math.random() * 10 + 1)}.png') center center no-repeat`,
          }}
        ></div>

        <div className={classes.name}>
          <h5>Facebook</h5>
          <span>(16 тысяч), нравится</span>
        </div>

        <Button>Подписаться</Button>
      </div>

      <div className={classes.images}>
        <div
          style={{
            background: `url('/images/article-bgs/${Math.floor(Math.random() * 10 + 1)}.png') center center no-repeat`,
          }}
        ></div>
        <div
          style={{
            background: `url('/images/article-bgs/${Math.floor(Math.random() * 10 + 1)}.png') center center no-repeat`,
          }}
        ></div>
        <div
          style={{
            background: `url('/images/article-bgs/${Math.floor(Math.random() * 10 + 1)}.png') center center no-repeat`,
          }}
        ></div>
        <div
          style={{
            background: `url('/images/article-bgs/${Math.floor(Math.random() * 10 + 1)}.png') center center no-repeat`,
          }}
        ></div>
      </div>
    </div>
  )
}
