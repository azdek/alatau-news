import Layout from 'components/Layout'
import HomeContainer from 'containers/HomeContainer'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <HomeContainer />
    </Layout>
  )
}

export default HomePage
