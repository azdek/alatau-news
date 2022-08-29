import { Container, Row, Col, Card } from 'react-bootstrap'

import Article from 'components/Article'
import Horizontal from 'components/Article/Horizontal'
import Filter from 'components/Filter'

import classes from './HomeContainer.module.sass'
import { useGetCatFactsQuery } from 'redux/api/cat.api'
import Cards from 'components/Article/Cards'
import Article3 from 'components/Article/Article3'
import CardSenior from 'components/Article/CardSenior'
import CardPutin from 'components/Article/CardPutin'
import CardPointer from 'components/Article/CardPainter'
import Cardsenior3 from 'components/Article/Cardsenior3'

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
      <div className={classes.grid_2}>
        <div className={classes.card}>
          <div className={classes.cards_1}>
            <Cards />
          </div>
          <div className={classes.cards_2}>
            <Cards />
          </div>
          <div className={classes.cards_3}></div>
        </div>
      </div>
      <section className={classes.news}>
        <div className={classes.news_media}>
          <h1>Последние новости</h1>
          <img src="/icons/pag.svg" alt="rfr" />
        </div>
        <div className={classes.news_card}>
          <div className={classes.news_card_block1}>
            <div className={classes.news_card_1}>
              <Article3 />
            </div>
            <div className={classes.news_card_1}>
              <Article3 />
            </div>
          </div>
          <div className={classes.news_card_block2}>
            <div className={classes.new_card_2}>
              <CardSenior />
            </div>
            <div className={classes.new_card_2}>
              <CardSenior />
            </div>
            <div className={classes.new_card_2}>
              <CardSenior />
            </div>
            <div className={classes.new_card_2}>
              <CardSenior />
            </div>
          </div>
          <div className={classes.new_photo}></div>
        </div>
      </section>
      <section className={classes.media_section}>
        <div className={classes.media}>
          <h1>Медиа</h1>
          <img src="/icons/pag.svg" alt="rfr" />
        </div>
        <div className={classes.media_cards}>
          <div className={classes.media_cards_1}>
            <Cards />
          </div>
          <div className={classes.media_cards_2}>
            <Cards />
          </div>
          <div className={classes.media_cards_3}>
            <Cards />
          </div>
          <div className={classes.media_cards_4}>
            <Cards />
          </div>
          <div className={classes.media_cards_5}>
            <Cards />
          </div>
          <div className={classes.media_cards_6}>
            <Cards />
          </div>
          <div className={classes.media_cards_7}>
            <Cards />
          </div>
          <div className={classes.media_cards_8}>
            <Cards />
          </div>
        </div>
        <div className={classes.media_opros}>
          <div className={classes.media_opros_putin}>
            <CardPutin />
          </div>
          <div className={classes.media_opros_photo}></div>
        </div>
      </section>
      <section className={classes.last_section}>
        <div className={classes.last_text}>
          <h1>Читайте также</h1>
          <p>Смотреть все</p>
          <span>Рекомендуемое</span>
        </div>
        <div className={classes.last_section_cards}>
          <div className={classes.last_section_card}>
            <CardPointer />
          </div>
          <div className={classes.last_section_card}>
            <CardPointer />
          </div>
          <div className={classes.last_section_card}>
            <CardPointer />
          </div>
        </div>
        <div className={classes.last_section_cards_2}>
          <div>
            <Cardsenior3 />
          </div>
          <div>
            <Cardsenior3 />
          </div>
          <div>
            <Cardsenior3 />
          </div>
        </div>
        <div className={classes.last_section_cards_3}>
          <div className={classes.last_cards_1}>
            <Cards />
          </div>
          <div className={classes.last_cards_2}>
            <Cards />
          </div>
          <div className={classes.last_cards_3}>
            <Cards />
          </div>
          <div className={classes.last_cards_4}>
            <Cards />
          </div>
        </div>
        <div className={classes.last_cards_photo}></div>
      </section>
    </Container>
  )
}
