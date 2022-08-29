import { Container, Row, Col } from 'react-bootstrap'
import classes from './ContactsContainer.module.sass'

import Socials from 'components/Navbar/Socials'

export default function ContactsContainer() {
  return (
    <div>
      <div className={classes.contacts__home}>
        <img src="/icons/Domik.svg" alt="dom" />
        <p>Контакты</p>
      </div>
      <Container className="mb-90 mt-90">
        <section className={classes.contacts__card}>
          <div className={classes.contacts__block__1}>
            <p>Адрес</p>
            <h6>Республика Казахстан, город Алма - Ата</h6>
            <span>Улица Московская 143; 3- Этаж; офис -2 </span>
          </div>
          <div className={classes.contacts__block__2}>
            <p>Телефон</p>
            <h6>(702) 555-0122; (702) 555-0122; (702) 555-0122 </h6>
          </div>
          <div className={classes.contacts__block__3}>
            <p> Cоциальные сети</p>
          </div>
          <div className={classes.contacts_social}>
            <Socials />
          </div>
          <div className={classes.contacts__block__4}>
            <p>Мобильное приложение</p>
          </div>
          <div className={classes.contacts__icon}>
            <img src="/icons/AppStore.svg" alt="app" />
            <img src="/icons/playmarket.svg" alt="app" />
          </div>
        </section>
      </Container>
    </div>
  )
}
