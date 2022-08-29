import { Button } from 'react-bootstrap'
import classes from './CardPutin.module.sass'

export default function CardPutin() {
  return (
    <div className={classes.putin}>
      <div className={classes.images}>
        <div
          style={{
            background: `url('/images/article-bgs/${Math.floor(Math.random() * 10 + 1)}.png') center center no-repeat`,
          }}
        ></div>
        <div className={classes.putin_text}>
          <p>Опрос</p>
          <h4>Что сделает Путин, если закроют все границы?</h4>
          <img src="/icons/Opros.svg" alt="opros" />
          <Button>Проголосовать</Button>
        </div>
      </div>
    </div>
  )
}
