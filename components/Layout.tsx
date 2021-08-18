import Head from 'components/Head'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

interface LayoutProps {
  children: any
  customMeta?: any
}

const Layout = ({ children, customMeta }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Head customMeta={customMeta} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
