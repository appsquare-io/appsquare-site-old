import { Meta, Divider, List, Footer } from 'components'

const Home = () => {
  return (
    <div className="flex flex-col items-center w-full px-10 mt-40 md:px-4 lg:px-6">
      <Meta />

      <div className="flex flex-col w-full max-w-xl space-y-10">
        <img src="/A.png" alt="Appsquare logo" className="w-24" />

        <Divider />

        <div className="flex flex-col">
          <h1 className="text-3xl font-medium tracking-tight">
            Hello, we&apos;re Appsquare
          </h1>
          <p className="mt-3 text-gray-800">
            We&apos;re operating reactively for now, but you can contact us at{' '}
            <a href="mailto:team@appsquare.io" className="font-medium">
              team@appsquare.io
            </a>{' '}
            with your reference.
          </p>
        </div>

        <List>
          <List.Heading>Services</List.Heading>
          <List.Items>
            <List.Item title="Business applications &amp; process digitization">
              By extracting commonalities across businesses and their processes,
              we can iterate efficiently and deploy releases at significantly
              reduced cost.
            </List.Item>
            <List.Item title="Static &amp; incrementally generated deliverables">
              The next generation of content websites are built from headless
              backends, deployed to intercontinental CDNs.
            </List.Item>
            <List.Item title="Highly concurrent &amp; fault tolerant systems">
              By leveraging the BEAM virtual machine at the core of the Open
              Telecom Platform, as well as modern tools such as Elixir/Phoenix,
              we can develop concurrent systems for the new age.
            </List.Item>
          </List.Items>
        </List>
        <List>
          <List.Heading>Process</List.Heading>
          <List.Items>
            <List.Item title="Incremental, minimum, viable">
              We focus extensively on small, focused iterations - they end with
              time frames, not dragged on for feature sets.
            </List.Item>
            <List.Item title="Design is a core">
              Treating design as a first class feature keeps us focused on what
              matters when working with user facing projects.
            </List.Item>
          </List.Items>
        </List>
      </div>
      <Footer />
    </div>
  )
}

export default Home
