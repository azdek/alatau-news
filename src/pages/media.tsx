import { Container, Row, Col } from 'react-bootstrap'

import Layout from 'components/Layout'
import type { NextPage } from 'next'
import MediaContainer from 'containers/MediaContainer'

const MediaPage: NextPage = () => {
  return (
    <Layout>
      <MediaContainer />
    </Layout>
  )
}

export default MediaPage
