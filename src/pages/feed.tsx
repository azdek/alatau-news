import Layout from 'components/Layout'
import Ribbon from 'components/Ribbon'
import type { NextPage } from 'next'
import { Container } from 'react-bootstrap'

const Feed: NextPage = () => {
  return (
    <Layout>
      <Container>
        <Ribbon />
      </Container>
    </Layout>
  )
}

export default Feed
