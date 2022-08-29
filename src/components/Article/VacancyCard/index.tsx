import { CalendarOutlined } from '@ant-design/icons'
import Button from 'components/UI/Button'
import classes from './Vacancycard.module.sass'

export default function VacancyCard() {
  return (
    <section className={classes.vacancy_body}>
      <div className={classes.vacancy_date}>
        <CalendarOutlined />
        <span>ЧТ, 19 мая, 2022</span>
      </div>
      <div className={classes.vacancy_text}>
        <h5>Ведущий корреспондент</h5>
        <Button>
          <p>1250$</p>
        </Button>
      </div>
      <div className={classes.vacancy_last_text}>
        <p>
          Quis at vel ipsum aliquam urna a, eleifend. Cras pellentesque lorem fermentum sed. Suspendisse at turpis
          euismod scelerisque tellus, massa morbi amet.
        </p>
      </div>
      <div className={classes.vacancy_last}>
        <p>Подробнее</p>
      </div>
    </section>
  )
}
