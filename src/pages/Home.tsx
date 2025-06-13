import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <Helmet>
        <title>Creator Playground • Building for independent creators</title>
        <meta http-equiv="Cache-Control" content="no-store" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        <meta
          name="description"
          content="Developing platforms that give creators access to the expertise, systems, and support they need to succeed."
        />
        <link rel="canonical" href="https://www.creatorplayground.io/" />
        <meta property="og:title" content="Creator Playground" />
        <meta
          property="og:description"
          content="Developing platforms that give creators access to the expertise, systems, and support they need to succeed."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.creatorplayground.io/" />
      </Helmet>
      <div className="mx-auto max-w-xl text-neutral-950 gap-4 flex flex-col px-4 text-lg/6 sm:text-base/6">
        <main className="gap-12 flex flex-col">
          <section className="flex flex-col gap-4">
            <div>
              The future of the creator economy belongs to independent creators
              who have the tools to build, grow, and sustain their businesses on
              their own terms.
            </div>

            <div>
              At <span className="font-bold">Creator Playground</span>, we're
              developing platforms that{' '}
              <a
                href="http://www.friendswetrust.com"
                className="underline hover:no-underline"
                aria-label="Friends We Trust. Makes it easy for creators to get access to the right experts on demand."
              >
                give creators access to the expertise
              </a>
              ,{' '}
              <a
                href="http://www.creatorstack.io"
                className="underline hover:no-underline"
                aria-label="Creator Stack. Discover the products and services that top content creators use to grow their audience, streamline their operations, and scale their brand."
              >
                systems
              </a>
              , and support they need to succeed.
            </div>
          </section>
          <section className="flex flex-row gap-2">
            <a
              href="mailto:hello@creatorplayground.io"
              className="underline hover:no-underline"
            >
              Contact
            </a>
            <a href="/partners" className="underline hover:no-underline">
              Partners
            </a>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
