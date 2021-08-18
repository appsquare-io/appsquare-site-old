import NextHead from 'next/head'
import { useRouter } from 'next/router'

interface HeadProps {
  customMeta?: any
}

const Head = ({ customMeta }: HeadProps) => {
  const router = useRouter()
  const meta = {
    title: 'Appsquare | Digital Agency',
    description: `Appsquare builds digital experiences for awesome companies around the world. We strive for efficiency, using the best tools for the job, and getting straight to the point.`,
    // image: 'https://appsquare.io/image/url',
    type: 'website',
    ...customMeta,
  }
  return (
    <NextHead>
      <link rel="icon" href="/favicon.ico" />
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta
        property="og:url"
        content={`https://appsquare.io${router.asPath}`}
      />
      <link rel="canonical" href={`https://appsquare.io${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Appsquare" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
    </NextHead>
  )
}

export default Head
