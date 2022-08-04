import { Container, Row, Col } from 'react-bootstrap'

import Layout from 'components/Layout'
import SocialCard from 'components/SocialCard'
import type { NextPage } from 'next'

const MediaPage: NextPage = () => {
  return (
    <Layout>
      <Container className="mb-90 mt-90">
        <Row>
          <Col md={4}>
            <SocialCard />
          </Col>
          <Col md={4}>
            <SocialCard />
          </Col>
          <Col md={4}>
            <SocialCard />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default MediaPage
