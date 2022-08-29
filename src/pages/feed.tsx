import Layout from 'components/Layout'
import Ribbon from 'containers/Ribbon'
import type { NextPage } from 'next'
import { Container } from 'react-bootstrap'

const FeedPage: NextPage = () => {
  return (
    <Layout>
      <Container>
        <Ribbon />
      </Container>
    </Layout>
  )
}

export default FeedPage
