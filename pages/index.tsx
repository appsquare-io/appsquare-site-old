import NextLink from 'next/link'
import Layout from 'components/Layout'
import { PageColumn } from 'components/Column'
import PageHeader from 'components/PageHeader'
import PageDescription from 'components/PageDescription'

const HomePage = () => {
  return (
    <Layout>
      <main>
        <PageColumn>
          <PageHeader>
            Hands-on digital agency for delightful apps, websites, and ideas.
          </PageHeader>

          <PageDescription>
            Appsquare <span className="line-through">builds</span> crafts{' '}
            <Link href="/work">digital experiences</Link> for awesome companies
            around the world. We strive for efficiency, using the best{' '}
            <Link href="/tools">tools</Link> for the job, and getting straight
            to the point.
            <br />
          </PageDescription>

          <p className="mt-10 text-sm font-medium text-gray-800">
            We&apos;re operating reactively for now, but you can contact us at{' '}
            <a href="mailto:team@appsquare.io" className="font-bold">
              team@appsquare.io
            </a>{' '}
            with your reference.
          </p>
        </PageColumn>
      </main>
    </Layout>
  )
}

const Link = ({ children, href }) => (
  <NextLink href={href} passHref>
    <a className="font-bold text-pink-600">{children}</a>
  </NextLink>
)

export default HomePage
