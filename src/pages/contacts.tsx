import Layout from 'components/Layout'
import type { NextPage } from 'next'

import ContactsContainer from 'containers/ContactsContainer'

const contacts: NextPage = () => {
  return (
    <Layout>
      <ContactsContainer />
    </Layout>
  )
}

export default contacts
