import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import Article from 'components/Article'
import Horizontal from 'components/Article/Horizontal'
import Filter from 'components/Filter'

import classes from './Ribbon.module.sass'
import { useGetCatFactsQuery } from 'redux/api/cat.api'
import SocialCard from 'components/SocialCard'
import Cards from 'components/Article/Cards'
import CardPointer from 'components/Article/CardPainter'
import CardSenior from 'components/Article/CardSenior'
import Article2 from 'components/Article/Article2'
import Cardsenior2 from 'components/Article/Cardsenior2'

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
          </section>

          <section className={classes.media_container}>
            <div className={classes.media}>
              <h1>Медиа</h1>
              <img src="/icons/pag.svg" alt="rfr" />
            </div>
            <div className={classes.card}>
              <div className={classes.middle_cards_1}>
                <Cards />
              </div>
              <div className={classes.middle_cards_2}>
                <Cards />
              </div>
              <div className={classes.middle_cards_3}>
                <Cards />
              </div>
              <div className={classes.middle_cards_4}>
                <Cards />
              </div>
              <div className={classes.middle_cards_5}>
                <Cards />
              </div>
              <div className={classes.middle_cards_6}>
                <Cards />
              </div>
              <div className={classes.middle_cards_7}>
                <Cards />
              </div>
              <div className={classes.middle_cards_8}>
                <Cards />
              </div>
            </div>
            <div className={classes.pointer_card}>
              <div className={classes.pointer_1}>
                <CardPointer />
              </div>
              <div className={classes.pointer_2}>
                <CardPointer />
              </div>
              <div className={classes.pointer_3}>
                <CardPointer />
              </div>
              <div className={classes.pointer_4}></div>
              <div className={classes.pointer_5}></div>
            </div>
          </section>

          <section className={classes.senior}>
            <div className={classes.senior_card}>
              <div className={classes.senior_card_1}>
                <CardSenior />
              </div>
              <div className={classes.senior_card_2}>
                <CardSenior />
              </div>
              <div className={classes.senior_card_3}>
                <CardSenior />
              </div>
              <div className={classes.senior_card_4}>
                <CardSenior />
              </div>
            </div>
            <div className={classes.senior_card_block_2}>
              <div className={classes.senior_card_5}>
                <CardSenior />
              </div>
              <div className={classes.senior_card_6}>
                <CardSenior />
              </div>
              <div className={classes.senior_card_7}>
                <CardSenior />
              </div>
              <div className={classes.senior_card_8}>
                <CardSenior />
              </div>
            </div>
            <div className={classes.senior_img}></div>
          </section>
          <section className={classes.last}>
            <div className={classes.last_card}>
              <div>
                <Article2 />
              </div>
              <div>
                <Article2 />
              </div>
              <div>
                <Article2 />
              </div>
            </div>
            <div className={classes.last_2}>
              <div className={classes.last_card_2}>
                <Cardsenior2 />
              </div>
              <div className={classes.last_card_2}>
                <Cardsenior2 />
              </div>
              <div className={classes.last_card_2}>
                <Cardsenior2 />
              </div>
              <div className={classes.last_card_2}>
                <Cardsenior2 />
              </div>
            </div>
            <div className={classes.last_3}>
              <div className={classes.last_card_3}>
                <Cardsenior2 />
              </div>
              <div className={classes.last_card_3}>
                <Cardsenior2 />
              </div>
              <div className={classes.last_card_3}>
                <Cardsenior2 />
              </div>
              <div className={classes.last_card_3}>
                <Cardsenior2 />
              </div>
            </div>
          </section>
        </Row>
      </Col>
    </Container>
  )
}
