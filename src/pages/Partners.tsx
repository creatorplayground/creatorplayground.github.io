import { Helmet } from "react-helmet-async";

function Partners() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-50">
            <Helmet>
                <title>Partners • Creator Playground</title>
                <meta name="description" content="We occasionally partner with creators, operators, and media companies on early-stage product and strategy work." />
                <link rel="canonical" href="https://www.creatorplayground.io/partners" />
                <meta property="og:title" content="Partners • Creator Playground" />
                <meta property="og:description" content="Exploration, strategy, and product development for emerging creative formats and markets." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.creatorplayground.io/partners" />
            </Helmet>
            <div className="mx-auto max-w-xl text-neutral-950 gap-4 flex flex-col px-4 text-lg/6 sm:text-base/6">
                <main className="gap-12 flex flex-col">
                    <section className="flex flex-col gap-4">
                        <div>We occasionally partner with creators, operators, and media companies who are rethinking how creative work gets made, distributed, and sustained.</div>

                        <div>Our work spans exploration, strategy, and product development. Often in spaces where emerging formats, behaviors, or markets are still taking shape.</div>

                        <div>
                            If you're exploring something new and want a thoughtful outside perspective{" "}
                            <a href="mailto:hello@creatorplayground.io" className="underline hover:no-underline">
                                we would love to talk.
                            </a>
                            .
                        </div>
                    </section>
                    <section className="flex flex-row gap-2">
                        <a href="/" className="underline hover:no-underline">
                            Home
                        </a>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Partners;
