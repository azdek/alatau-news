import { Container, Row, Col } from 'react-bootstrap'

import Article from 'components/Article'
import Horizontal from 'components/Article/Horizontal'
import Filter from 'components/Filter'

import classes from './Home.module.sass'
import { useGetCatFactsQuery } from 'redux/api/cat.api'

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
    </Container>
  )
}
