import { Container, Row, Col } from 'react-bootstrap'

import AuthContainer from 'containers/AuthContainer'
import type { NextPage } from 'next'

const AuthPage: NextPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <AuthContainer />
        </Col>
      </Row>
    </Container>
  )
}

export default AuthPage
