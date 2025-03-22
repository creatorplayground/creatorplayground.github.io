import "./App.css";
import img from "./assets/img.jpg";

function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-50">
            <div className="mx-auto max-w-xl text-neutral-950 gap-4 flex flex-col">
                <div className="gap-4 flex flex-col">
                    <p>The future of the creator economy belongs to independent creators who have the tools to build, grow, and sustain their businesses on their own terms.</p>

                    <p>
                        At <span className="font-bold">Creator Playground</span>, we're developing platforms that{" "}
                        <a href="http://www.friendswetrust.com" className="underline hover:no-underline">
                            give creators access to the expertise
                        </a>
                        , systems, and support they need to succeed.
                    </p>

                    <p>
                        <a href="mailto:hello@creatorplayground.io" className="underline hover:no-underline">
                            Let's talk.
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
