import { Container } from 'react-bootstrap'
import classes from './VacanciesContainer.module.sass'

import VacancyCard from 'components/Article/VacancyCard'

export default function VacanciesContainer() {
  return (
    <div>
      <div className={classes.contacts__home}>
        <img src="/icons/Domik.svg" alt="dom" />
        <p>Вакансии</p>
      </div>
      <Container>
        <section className={classes.vacancy__card}>
          <div className={classes.vacancy__card__1}>
            <VacancyCard />
          </div>
          <div className={classes.vacancy__card__2}>
            <VacancyCard />
          </div>
          <div className={classes.vacancy__card__3}>
            <VacancyCard />
          </div>
          <div className={classes.vacancy__card__4}>
            <VacancyCard />
          </div>
          <div className={classes.vacancy__card__5}>
            <VacancyCard />
          </div>
          <div className={classes.vacancy__card__6}>
            <VacancyCard />
          </div>
          <div className={classes.vacancy__card__7}>
            <VacancyCard />
          </div>
          <div className={classes.vacancy__card__7}>
            <VacancyCard />
          </div>
        </section>
      </Container>
    </div>
  )
}
