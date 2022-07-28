import { Container, Row, Col } from 'react-bootstrap'
import { GlobalOutlined, DownOutlined, CloudOutlined } from '@ant-design/icons'

import Currencies from './Currencies'
import Socials from './Socials'

import classes from './Navbar.module.sass'
import Clock from 'components/Clock'
import Navigation from './Navigation'

export default function Navbar() {
  return (
    <>
      <header className={classes.wrapper}>
        <Container>
          <Row>
            <div className={classes.container}>
              <div className={classes.info_wrapper}>
                <div className={classes.lang}>
                  <GlobalOutlined />
                  <span>ENG</span>
                  <DownOutlined style={{ fontSize: 8 }} />
                </div>
                <div className={classes.info}>
                  <CloudOutlined />
                  <p>ЧТ, 19 мая, 2022</p>
                </div>
                <div className={classes.info}>
                  <CloudOutlined />
                  <p>Бишкек 18&#176; C</p>
                </div>
              </div>
              <Currencies />
              <Socials />
            </div>
          </Row>
          <Row className={classes.header_middle}>
            <Col md={6}>
              <div className={classes.logo_clocks}>
                <img src="/icons/logo.svg" alt="Alatau-News logo" />
                <Clock city="London" offset={-5} />
                <Clock city="Moscow" offset={-3} />
                <Clock city="Berlin" offset={-4} />
                <Clock city="Tokyo" offset={3} />
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.banner} />
            </Col>
          </Row>
        </Container>
      </header>
      <Navigation />
    </>
  )
}
