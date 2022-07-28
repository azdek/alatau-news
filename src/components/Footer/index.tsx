import { Container, Row, Col } from 'react-bootstrap'
import { MailFilled, PhoneFilled } from '@ant-design/icons'

import Socials from 'components/Navbar/Socials'

import classes from './Footer.module.sass'

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Container>
        <Row>
          <div className={classes.footer_top}>
            <img className={classes.footer_logo} src="/icons/logo.svg" alt="Alatau-News logo" />
            <Socials />

            <a className={classes.contact} href="tel:+996557229906">
              <span className={classes.contact_label}>
                <MailFilled />
                <p>Номер телефона</p>
              </span>
              <span className={classes.contact_value}>+996 (557) 22-99-06</span>
            </a>

            <a className={classes.contact} href="mailto:alataunews.info@gmail.com">
              <span className={classes.contact_label}>
                <PhoneFilled />
                <p>Электронный адрес</p>
              </span>
              <span className={classes.contact_value}>Alataunews.info@gmail.com</span>
            </a>
          </div>
        </Row>
      </Container>
    </footer>
  )
}
