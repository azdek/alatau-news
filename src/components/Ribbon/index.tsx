import { Container, Row, Col, Image } from 'react-bootstrap'
import { MailFilled, PhoneFilled } from '@ant-design/icons'

import Article from 'components/Article'
import Horizontal from 'components/Article/Horizontal'
import Filter from 'components/Filter'

import classes from './Ribbon.module.sass'
import { useGetCatFactsQuery } from 'redux/api/cat.api'
import SocialCard from 'components/SocialCard'
import Clock from 'components/Clock'

export default function HomeContainer() {
  const { data, isFetching } = useGetCatFactsQuery({ someSameArg: 1 })
  console.log(isFetching, data)

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Filter title="Популярное" />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <section className={classes.grid}>
            <div className={classes.grid_block__1}>
              <Article />
            </div>
            <div className={classes.grid_block__2}>
              <Article type="secondary" />
            </div>
            <div className={classes.grid_block__3}>
              <Article type="secondary" />
            </div>
            <div className={classes.grid_block__4}>
              <Article type="secondary" />
            </div>
            <div className={classes.grid_block__5}>
              <Article type="secondary" />
            </div>
            <div className={classes.grid_block__6}>
              <Article />
            </div>
          </section>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <section className={classes.grid_1}>
            <div className={classes.grid_1_block__1}>
              <Article />
            </div>
            <div className={classes.grid_1_block__2}>
              <Article />
            </div>
            <div className={classes.grid_1_block__3}>
              <Horizontal />
            </div>
            <div className={classes.grid_1_block__4}>
              <Horizontal />
            </div>
            <div className={classes.grid_1_block__5}>
              <Horizontal />
            </div>
            <div className={classes.grid_1_block__6}>
              <Horizontal />
            </div>
          </section>
        </Col>
      </Row>
      <Col md={12}>
        <Row>
          <section className={classes.middle_container}>
            <div className={classes.middle_time}>
              <ol>
                <h3>Мировое время</h3>
                <p>Четверг, 16 июня, Бишкек (GMT+6)</p>
              </ol>
            </div>
            <div className={classes.middle_parent}>
              <div>
                <img src="/icons/USD.svg" alt="Lon" />
                <span>New York: </span>
                <p>07:49:</p>
                <tr>45</tr>
              </div>
              <div>
                <img src="/icons/RUB.svg" alt="RUB" />
                <span>Moscow:</span>
                <p>07:49:</p>
                <tr>45</tr>
              </div>
            </div>
            <div className={classes.middle_parent_inner}>
              <div>
                <img src="/icons/LONDON.svg" alt="Lon" />
                <span>London:</span>
                <p>07:49:</p>
                <tr>45</tr>
              </div>
              <div>
                4
                <img src="/icons/USD.svg" alt="Lon" />
                <span>New York: </span>
                <p>07:49:</p>
                <tr>45</tr>
              </div>
            </div>
            <div className={classes.middle_grid}>
              <div
                className={classes.middle_block_1}
                style={{
                  background: `url('/images/article-bgs/${Math.floor(
                    Math.random() * 10 + 1
                  )}.png') center center no-repeat`,
                }}
              ></div>
              <div className={classes.middle_social}>
                <SocialCard />
              </div>
              <div className={classes.middle_block_2}>{/* <Horizontal /> */}</div>
            </div>
            {/* <ol>
                <h3>Мировое время</h3>
                <p>Четверг, 16 июня, Бишкек (GMT+6)</p>
              </ol>
            </div>
            <div className={classes.middle__country__usd}>
              <img src="/icons/USD.svg" alt="Lon" />
              <span>New York: </span>
              <p>07:49:</p>
              <tr>45</tr>
            </div>
            <div className={classes.middle__country__rub}>
              <img src="/icons/RUB.svg" alt="RUB" />
              <span>Moscow:</span>
              <p>07:49:</p>
              <tr>45</tr>
            </div>
            <div className={classes.middle__country__london}>
              <img src="/icons/LONDON.svg" alt="Lon" />
              <span>London:</span>
              <p>07:49:</p>
              <tr>45</tr>
            </div>

            <div className={classes.middle_facebook}>
              <SocialCard />
            </div>
            <div className={classes.middle_photo}>
              <div
                className={classes.middle_text}
                style={{
                  background: `url('/images/article-bgs/${Math.floor(
                    Math.random() * 10 + 1
                  )}.png') center center no-repeat`,
                }}
              >
                <div className={classes.middle_putin}>
                  <ol>
                    <p>Опрос</p>
                    <span>Что сделает Путин, если закроют все границы?</span>
                  </ol>
                </div>
                <div>
                  <input type="radio" />
                </div>
              </div>
            </div>
            <div
              className={classes.middle_3}
              style={{
                background: `url('/images/article-bgs/${Math.floor(
                  Math.random() * 10 + 1
                )}.png') center center no-repeat`,
              }}
            >*/}
          </section>
        </Row>
      </Col>
    </Container>
  )
}
