import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import classes from './MediaContainer.module.sass'
import { useGetCatFactsQuery } from 'redux/api/cat.api'
import Cards from 'components/Article/Cards'
import CardPutin from 'components/Article/CardPutin'
import Filter from 'components/Filter'
import CardPointer from 'components/Article/CardPainter'
import { CalendarFilled } from '@ant-design/icons'

export default function HomeContainer() {
  const { data, isFetching } = useGetCatFactsQuery({ someSameArg: 1 })
  console.log(isFetching, data)

  return (
    <>
      <div className={classes.header_img}>
        <img src="/images/MediaPhoto.png" alt="phone" />
        <div className={classes.header_text_1}>
          <h3>Мишель Бачелет пообещала развивать отношения ООН и КНР в сфере прав человека</h3>
        </div>
      </div>
      <Container>
        <section className={classes.media__block__card}>
          <div className={classes.media__block__cards}>
            <div className={classes.media_card_1}>
              <Cards />
            </div>
            <div className={classes.media_card_2}>
              <Cards />
            </div>
            <div className={classes.media_card_3}>
              <Cards />
            </div>
            <div className={classes.media_card_4}>
              <Cards />
            </div>
          </div>
          <div className={classes.media__card__opros}>
            <div className={classes.media_opros_putin}>
              <CardPutin />
            </div>
            <div className={classes.media_opros_photo}></div>
          </div>
        </section>
        <section className={classes.media__block_2}>
          <div className={classes.media__podcasts}>
            <h1>Медиа</h1>
            <img src="/icons/pag.svg" alt="rfr" />
          </div>
          <div className={classes.media__block__podcasts}>
            <img src="/images/podcasts.png" alt="podcasts" />
          </div>
        </section>
        <section className={classes.media__block__video}>
          <div className={classes.media_video}>
            <Row>
              <Col md={12}>
                <Filter title="Видео" />
              </Col>
            </Row>
          </div>
          <div className={classes.media_video_card}>
            <div className={classes.media_video_1}>
              <Cards />
            </div>
            <div className={classes.media_video_2}>
              <Cards />
            </div>
            <div className={classes.media_video_3}>
              <Cards />
            </div>
            <div className={classes.media_video_4}>
              <Cards />
            </div>
            <div className={classes.media_video_5}>
              <Cards />
            </div>
            <div className={classes.media_video_6}>
              <Cards />
            </div>
            <div className={classes.media_video_7}>
              <Cards />
            </div>
            <div className={classes.media_video_8}>
              <Cards />
            </div>
          </div>
        </section>
        <section className={classes.media__block__4}>
          <div className={classes.media__text}>
            <h2>Смотрите также</h2>
          </div>
          <div className={classes.media__cards__4}>
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
          <div className={classes.media__cards__5}>
            <div className={classes.media_video_1}>
              <Cards />
            </div>
            <div className={classes.media_video_2}>
              <Cards />
            </div>
            <div className={classes.media_video_3}>
              <Cards />
            </div>
            <div className={classes.media_video_4}>
              <Cards />
            </div>
          </div>
          <div className={classes.media__cards__photo}></div>
        </section>
      </Container>
    </>
  )
}
