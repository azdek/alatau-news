import Layout from 'components/Layout'
import VacanciesContainer from 'containers/VacanciesContainer'
import type { NextPage } from 'next'

const vacancies: NextPage = () => {
  return (
    <Layout>
      <VacanciesContainer />
    </Layout>
  )
}

export default vacancies
