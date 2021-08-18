import Layout from 'components/Layout'
import { PageColumn } from 'components/Column'
import PageHeader from 'components/PageHeader'
import PageDescription from 'components/PageDescription'

const WorkPage = () => {
  return (
    <Layout>
      <PageColumn>
        <PageHeader>Work</PageHeader>

        <PageDescription>
          We're updating our website, this section will be done soon :)
        </PageDescription>
      </PageColumn>
    </Layout>
  )
}

export default WorkPage
