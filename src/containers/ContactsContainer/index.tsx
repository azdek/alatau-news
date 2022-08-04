import { Container, Row, Col } from 'react-bootstrap'

import ContactsCard from 'components/ContactsCard'

export default function ContactsContainer() {
  return (
    <>
      <Container className="mb-90 mt-90">
        <Row>
          <Col>
            <ContactsCard />
          </Col>
        </Row>
      </Container>
    </>
  )
}
