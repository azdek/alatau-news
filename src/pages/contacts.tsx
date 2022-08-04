import { Container, Row, Col } from 'react-bootstrap'

import Layout from 'components/Layout'
import type { NextPage } from 'next'
import ContactsCard from 'components/ContactsCard'

const contacts: NextPage = () => {
  return (
    <Layout>
      <Container className="mb-90 mt-90">
        <Row>
          <Col md={4}>
            <ContactsCard />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default contacts
