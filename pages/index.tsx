import NextLink from 'next/link'
import { Column } from 'components'
import Head from 'components/Head'
import Navbar from 'components/Navbar'
import { Footer } from 'components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Head />
      <main>
        <Column size="small" className="mt-0 sm:mt-20 md:mt-28">
          <h1 className="text-3xl font-extrabold text-transparent sm:text-4xl md:text-6xl bg-clip-text bg-gradient-to-br from-red-400 to-pink-600">
            Hands-on digital agency for delightful apps, websites, and ideas.
          </h1>

          <p className="mt-5 text-2xl font-semibold text-gray-800 sm:text-3xl">
            Appsquare <span className="line-through">builds</span> crafts{' '}
            <Link href="/projects">digital experiences</Link> for{' '}
            <Link href="/clients">awesome companies</Link> around the world. We
            strive for efficiency, using the best{' '}
            <Link href="/tools">tools</Link> for the job, and getting straight
            to the point.
            <br />
          </p>

          <p className="mt-10 text-sm font-medium text-gray-800">
            We&apos;re operating reactively for now, but you can contact us at{' '}
            <a href="mailto:team@appsquare.io" className="font-bold">
              team@appsquare.io
            </a>{' '}
            with your reference.
          </p>
        </Column>
      </main>
      <Footer />
    </>
  )
}

const Link = ({ children, href }) => (
  <NextLink href={href} passHref>
    <a className="font-bold text-pink-600">{children}</a>
  </NextLink>
)

export default Home
